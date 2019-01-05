
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {asyncGetNote, asyncAddNote} from '../../Store/actions/note'
import {syncLogout} from '../../Store/actions/login'
import {connect} from 'react-redux'
import {List} from '../../Component/UI/List/List'
import Input from '../../Component/UI/Input/input'
import Button from '../../Component/UI/Button/Button'
import {Redirect, withRouter} from 'react-router-dom'


class Note extends Component{
    constructor (props){
        super(props)
        this.state = {
            notes : this.props.notes,
            message : '',
            newNote : ''
        }
        if(this.props.user.userId){
            this.props.getNotes(this.props.user.userId)
        }
        console.log('NOTE')
    }

    onChangeHandler = (event)=>{
        
        var newNote = event.target.value
        this.setState({newNote, message : ''})
    }

    onAddNoteClick = ()=>{
        if(this.state.newNote === ''){
            this.setState({message : 'Cannot be Empty'})
        }else{
            this.props.addNote(this.props.user.userId, this.state.newNote)
            this.setState({notes : this.props.notes, message : 'Saved Successfully'})
        }
    }

    onLogoutClick = ()=>{
            this.props.logout()
    }

    render(){
        return(
            <div>
           {this.props.user.isLogin ?
            <div>
            {this.state.message !== '' ? <p>{this.state.message}</p> : null}
            <Input label='Add Note' name='note' type='text' placeholder='Enter new note' onChange={this.onChangeHandler}></Input>
            <Button value='ADD' onClick={this.onAddNoteClick} ><Redirect to='/notes' /></Button>
            <Button value='LOGOUT' onClick={this.onLogoutClick}></Button>
             <List data={this.props.notes} />
             </div> :
              <Redirect to='/login' />}
           </div>
        )
    }
}

function mapStateToProps(state){

    return {
        user : state.user,
        notes : state.notes,
    }
}

const mapDispatchToProps = (dispatch)=>{

    return bindActionCreators({getNotes : asyncGetNote, addNote : asyncAddNote, logout : syncLogout},dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Note))

