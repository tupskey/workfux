import * as ActionTypes from './actiontypes'

export const returnError = (msg) => ({
    type: ActionTypes.SET_ERRORS,
   payload: msg
})

export const clearError = () => ({
    type: ActionTypes.CLEAR_ERRORS
})