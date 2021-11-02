import * as ActionTypes from '../actions/actiontypes'



export const ErrorHandler = (state = {
                        msg: null
}, action) => {
    switch(action.type) {
        case ActionTypes.SET_ERRORS:
            return{...state, msg: action.payload}
        case ActionTypes.CLEAR_ERRORS:
            return {...state, msg: null}
        default:
            return state;
    }
}