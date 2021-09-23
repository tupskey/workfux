import * as ActionTypes from './actiontypes'

export const OneOff = (state = {
    projects : [],
    isLoading: false,
    error: ''
}, action) => {
     switch(action.type) {
        case ActionTypes.ONEOFF_LOADING:
            return {...state, isLoading : true}
        case ActionTypes.ONEOFF_FAILED:
            return {...state, error: error }
        case ActionTypes.FETCH_ONEOFF:
            return {...state, projects: action.payload}
        default:
            return state
    }
}