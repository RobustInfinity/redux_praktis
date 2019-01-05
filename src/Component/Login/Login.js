
import React,{Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Input from '../UI/Input/input'
import Button from '../UI/Button/Button'
import {validate} from '../../Validation/validate'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            message : ''
        }
        
        
    }

    onChangeHandler = (event, key)=>{
        this.setState({message : ''})
        var value = {}
        value[key] = event.target.value
        this.setState({...value})
    }

    onClick = ()=>{
        
            
            if(!validate('email', this.state.email) || this.state.password === ''){
                this.setState({message : 'Invalid Details'})
            }
            else{
                this.props.onClick(this.state)
            }
        
    }


    render(){
        return(
        <div>
        {this.props.user.isLogin ? <Redirect to='/notes'/> : 
            <div>
            {this.state.message !== '' ? <p>{this.state.message}</p> : null}
            <Input label='Email' name='email' type='text' placeholder='Enter Email' onChange={this.onChangeHandler} />
            <Input label='Password' name='password' type='password' placeholder='Enter Password' onChange={this.onChangeHandler} />
            <Button value='LOGIN' onClick={this.onClick}/>
            <Link to='/signup'>New User?</Link>
            </div>
        }
        </div>
        )
    }
}



export default Login