import * as ActionTypes from './actiontypes';


export const authStart = () => ({
    type:ActionTypes.AUTH_START
})

export const authSuccess = (token, userId) => ({
    type: ActionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
})

export const authFail = (error) => ({
    type: ActionTypes.AUTH_FAILED,
    error: error
})

export const registerFailed = (error) => ({
    type: ActionTypes.REGISTER_FAILED,
    error: error
})

export const registerSuccess = () => ({
    type: ActionTypes.REGISTER_SUCCESS
})


export const loginUser =  () =>  (dispatch) =>{

    dispatch(authStart())

    return 

}

export const regUser = () => (dispatch) => {

}

export const checkAuthState = () => {

}






