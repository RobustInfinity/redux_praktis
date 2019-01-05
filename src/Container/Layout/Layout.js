import React, { Component } from 'react';
import { connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {asyncLogin} from '../../Store/actions/login'
import {Switch, Route} from 'react-router-dom'
import Auth from '../Auth.js/Auth'
import Login from '../../Component/Login/Login'
import SignUp from '../../Component/SignUp/SignUp'
import Note from '../Note/Note'

class Layout extends Component {


    render(){

        return(
            <div>
            <Switch>
            <Route exact path='/' render={()=><Auth user={this.props.user}/>} />
            <Route  path='/notes' render={()=><Note />} />
            <Route exact path='/login' 
            render={()=><Login user={this.props.user} onClick={this.props.doLogin}/>} />
            <Route path='/signup' component={SignUp} />
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    
    return {
        user : state.user,
    }
}

const mapDispatchToProps = (dispatch)=>{

    return bindActionCreators({doLogin : asyncLogin},dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))