import * as ActionTypes from './actiontypes';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios'



export const authStart = () => ({
    type:ActionTypes.AUTH_START
})

export const authSuccess = (user) => ({
    type: ActionTypes.AUTH_SUCCESS,
    payload: user
})

export const authFail = (error) => ({
    type: ActionTypes.AUTH_FAILED,
    payload: error
})



export const registerFailed = (error) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: error
})

export const registerSuccess = () => ({
    type: ActionTypes.REGISTER_SUCCESS
})


export const loginUser =  (email, password) =>  async (dispatch) =>{

    dispatch(authStart())

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const user = JSON.stringify({
        email, password
    })

    try {
        const response = await axios.post(baseUrl + 'login', user, config);
        console.log(response);
        if(response.data.status === true) {
        const expirationDate = new Date( new Date().getTime() + response.data.data.authorization.expired_at * 1000)
        alert('good login')
        localStorage.setItem('token', response.data.data.authorization.token)
        localStorage.setItem('expirationDate', expirationDate)
        dispatch(authSuccess(response.data.data));
        dispatch(checkAuthTimeOut(response.data.data.authorization.expired_at))
        }else{
            alert('bad login')
        }
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
            payload: response.data.data
        }))
        .catch(err => dispatch(registerFailed(err.response.data)))

}

export const logOut = () =>  {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type: ActionTypes.LOGOUT_SUCCESS,

    }
}

export const checkAuthState = () => {
    return dispatch => {
     const token = localStorage.getItem('token')
     if(!token){
         dispatch(logOut())
     } else{    
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
        if(expirationDate > new Date()) {
            dispatch(logOut())
        }else{
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        }
     }

    }
}



export const checkAuthTimeOut = (expirationTme) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(logOut())
        }, expirationTme * 1000)
    }
}




