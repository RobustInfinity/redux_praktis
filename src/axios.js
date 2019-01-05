import axios from 'axios'
import config from './config'

const instance = axios.create({
    baseURL : config.BASE_URL,
    headers :{
        'Content-Type':'application/json'
    },
    timeout : 20000
})

export default instance