
import {GET_DATA} from '../type'

const initialState = {
    about:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_DATA:
        return {
            ...state,
            about:action.payload,
            loading:false

        }
        default: return state
    }

}