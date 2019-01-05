
import {combineReducers,compose ,createStore, applyMiddleware} from 'redux'
import loginReducer from './reducers/login'
import noteReducer from './reducers/note'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    'user' : loginReducer,
    'notes' : noteReducer
})

export default createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))