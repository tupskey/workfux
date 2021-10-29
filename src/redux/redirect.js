import * as ActionType from './actiontypes'

export const reDirect = (state ={}, action) => {
    switch(action.type) {
        case ActionType.REDIRECT:
            return {redirectTo : action.payload}
        default:
            return state;
    }
}