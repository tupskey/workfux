import * as Actiontypes from './actiontypes'

export const Services = (state ={
    isLoading: false,
    services: [],
    error: null
}, action) => {
    switch(action.type) {
        case Actiontypes.SERVICES_LOADING:
            return{...state, isLoading: true, services: [], error: null}
        case Actiontypes.SERVICES_FAILED:
            return{...state, isLoading: false, services: [], error: action.payload}
        case Actiontypes.FETCH_SERVICES:
            return{...state, isLoading: false, services: action.payload, error: null}
        default:
            return state;
    }
}