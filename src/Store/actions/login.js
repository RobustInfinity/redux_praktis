
import API from '../../axios'

const syncLogin = (data)=>{
    return { 
        type : 'LOGIN',
        payload  : data
    }
}

export const asyncLogin = (obj)=>{
    console.log(obj)
    var loginObj = {}
    loginObj['email'] = obj.email
    loginObj['password'] = obj.password
    return (dispatch) => {
        API.post('/login',loginObj)
        .then((success)=>{
            var data = success.data
            if(data.success){
                console.log(data)
                dispatch(syncLogin(data.result))
            }else{
                console.log(data)
            }
            
        })
    }
}

export const syncLogout = ()=>{
    return { 
        type : 'LOGOUT'
    }
}