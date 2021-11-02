import * as ActionTypes from './actions/actiontypes'

export const OneOff = (state = {
    projects : [],
    isLoading: false,
    error: null
}, action) => {
     switch(action.type) {
        case ActionTypes.ONEOFF_LOADING:
            return {...state, isLoading : true}
        case ActionTypes.ONEOFF_FAILED:
            return {...state, error: action.payload }
        case ActionTypes.FETCH_ONEOFF:
            return {...state, projects: action.payload}
        default:
            return state
    }
}