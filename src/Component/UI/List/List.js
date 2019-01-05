
import React from 'react'

export const List = (props)=>{
   
    var data = props.data.notes
 
    return (
        <div>
        <p>Notes Count : {data.length}</p>
        <ul>
        {
        data.map((item)=>{
            return <li key={item.noteId}>{item.note}</li>
        })} 
        </ul>
        </div>
    )
}