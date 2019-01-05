
import React from 'react'

const Input = (props)=>{

    return(
        <div>
        <label>{props.label}</label>
        <input type={props.type} onChange={(event)=>props.onChange(event, props.name)} placeholder = {props.placeholder} value={props.value}/>
        </div>
    )
}

export default Input