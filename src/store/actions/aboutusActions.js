import {GET_DATA, DATA_ERROR} from '../type'
import axios from 'axios'

export const getabout = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://my-json-server.typicode.com/ravisaxena23/demo/posts`)
        dispatch( {
            type: GET_DATA,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: DATA_ERROR,
            payload: console.log(e),
        })
    }

}