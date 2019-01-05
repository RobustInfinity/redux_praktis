import React from 'react'
import {Redirect} from 'react-router-dom'


const Auth = (props)=>{
    
        if(props.user.isLogin){
            return <div><Redirect to='/notes' /></div>
        }else{
            return <div><Redirect to='/login' /></div>
        }     
    
}


export default Auth