
import API from '../../axios'

const syncGetNote = (data)=>{
    return {
        type: 'ADD',
        payload : data
    }
}

export const asyncGetNote = (userId)=>{
    console.log(userId)
    return dispatch=>{
        API.post('/getNotes',{userId : userId})
        .then((success)=>{
            
            var result = success.data.result
            dispatch(syncGetNote(result))
            
        })
    }
}

export const asyncAddNote = (userId, note)=>{

    console.log(userId)
    return dispatch=>{
        API.post('/createNote',{userId : userId, note : note})
        .then((success)=>{
            
            var data = success.data
            if(data.success){
                var result = data.result
                dispatch(syncGetNote(result))
            }
            
        })
    }
}
