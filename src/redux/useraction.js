import * as ActionTypes from './actiontypes';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios'


export const authStart = () => ({
    type:ActionTypes.AUTH_START
})

export const authSuccess = (token) => ({
    type: ActionTypes.AUTH_SUCCESS,
    token: token
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

export const logOut = () => ({
    type: ActionTypes.LOGOUT_SUCCESS
})


export const loginUser =  (email, password) =>  async (dispatch) =>{

    dispatch(authStart())

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const user = JSON.stringify( {
        email, password
    })

    try {
        const response = await axios.post(baseUrl + 'login', user, config);
        console.log(response);
        dispatch(authSuccess(response.data.authorization));
    } catch (err) {
        dispatch(authFail(err));
    }
}

export const regUser = (email, username, password) => (dispatch) => {

    dispatch(authStart())
    
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    const userData = JSON.stringify({
        email, username, password
    })
        axios.post(baseUrl + 'register', userData, config)
        .then(response => dispatch({
            type: ActionTypes.REGISTER_SUCCESS,
            payload: response.data
        }))
        .catch(err => dispatch(registerFailed(err.response.data)))

}

export const checkAuthState = () => {

}



export const checkAuthTimeOut = (expirationTme) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(logOut())
        }, expirationTme * 1000)
    }
}




