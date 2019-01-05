
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Input from '../UI/Input/input'
import Button from '../UI/Button/Button'
import API from '../../axios'

class SignUp extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            password : '',
            message : ''
        }
        console.log('SIGNUP')
    }

    onChangeHandler = (event, key)=>{
        if(this.state.message !== ''){
            this.setState({message : ''})
        }
        var value = {}
        value[key] = event.target.value
        this.setState({...value})
    }

    onClick = ()=>{
        if(this.state.name === '' || this.state.email === '' || this.state.password === ''){
            this.setState({message : 'Felid cannot be empty'})
        }else{
            API.post('/signup',{name : this.state.name, email : this.state.email, password : this.state.password})
            .then((success)=>{
                console.log(success.data)
                if(success.data.success){
                    this.setState({message : success.data.message})
                }else{
                    this.setState({message : success.data.errors.email})
                }
                
            })
            .catch((error)=>{

            })  
        }
        
    }

    render(){
        return(
        <div>
            <p>{this.state.message !== '' ? this.state.message : null}</p>
            <Input label='Name' name='name' type='text' placeholder='Enter Name' onChange={this.onChangeHandler} />
            <Input label='Email' name='email' type='text' placeholder='Enter Email' onChange={this.onChangeHandler} />
            <Input label='Password' name='password' type='password' placeholder='Enter Password' onChange={this.onChangeHandler} />
            <Button value='REGISTER' onClick={this.onClick}/>
            <Link to='/login'>Back To Login</Link>
        </div>
        )
    }
}

export default SignUp