import * as ActionTypes from './actiontypes';


export const loginStart = () => ({
    type: ActionTypes.LOGIN_START
})

export const loginSuccess = (authData) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: authData
})

export const loginFail = (error) => ({
    type: ActionTypes.LOGIN_FAIL,
    payload: error
})

export const loginUser = (email, password) => {
    dispatch(loginStart())

    

    return 
}