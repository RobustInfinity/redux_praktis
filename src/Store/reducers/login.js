
import Storage from '../../localStorage'


const getIntialstate = ()=>{


        //intialise localstorage with intial state
        
           return  {
                userId : Storage.length() === 0 ?'' : Storage.get('userId'),
                name : Storage.length() === 0 ?'' : Storage.get('name'),
                email : Storage.length() === 0 ?'' : Storage.get('email'),
                isLogin : Storage.length() === 0 ? false : Storage.get('isLogin')
            }
    }


const loginReducer = (action)=>{
    console.log(action)
    return {
        userId : action.payload.userId,
        name : action.payload.name,
        email : action.payload.email,
        isLogin : true
    }
}

const logoutReducer = ()=>{
    var intialState = {
        userId : '',
        name : '',
        email : '',
        isLogin : false
    }
    
    return intialState
}

const reducer = (state = getIntialstate(), action)=>{
    // console.log(getIntialstate())
    switch(action.type){
        case 'LOGIN' : 
            var login = loginReducer(action)
            console.log(login)
            Storage.save(login)
            return login
        case 'LOGOUT' : 
            var logout = logoutReducer()
            Storage.save(logout)
            return logout
        default :
            Storage.save(state)
            return state
    }
}

export default reducer