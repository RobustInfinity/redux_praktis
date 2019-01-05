

const intialState = {
    notes : [],
    count : 0
}

const noteReducer = (data)=>{
    return{
        notes : data.notes,
        count : data.notes.length
    }
}
const reducer = (state = intialState, action)=>{
    switch(action.type){
        case 'GET' :
            return noteReducer(action.payload)
        case 'ADD' :
            return noteReducer(action.payload)
        default :
            return state
    }
}

export default reducer