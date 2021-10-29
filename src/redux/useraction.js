import * as ActionTypes from './actiontypes';
import { baseUrl, history } from '../shared/baseUrl';
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


export const resetFail = (error) => ({
    type: ActionTypes.AUTH_FAILED,
    payload: error
})

export const resetSuccess = (error) => ({
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

export const redirect = link => {
    return {
        type: ActionTypes.REDIRECT,
        payload: link
    }
}

export const emailSucess = (token) => ({
    type: ActionTypes.VERIFY_EMAIL,
    payload: token
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
        const expirationDate = new Date( new Date().getTime() + response.data.data.authorization.expired_at * 1000);

        localStorage.setItem('token', response.data.data.authorization.token)
        localStorage.setItem('expirationDate', expirationDate)
        dispatch(authSuccess(response.data.data));
        dispatch(checkAuthTimeOut(response.data.data.authorization.expired_at));
        dispatch(redirect("/dashboard"));
       
        }else{
            alert('bad login')
        }
    } catch (err) {
        alert('bad login')
        dispatch(authFail(err));
    }
}

export const regUser = (email, username, password) => async (dispatch) => {

    dispatch(authStart())
    
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    const userData = JSON.stringify({
        email, username, password
    })
    try {
        const response = await axios.post(baseUrl + 'register', userData, config)
        console.log(response)
        if(response.data.status === true) {
            dispatch({
                type: ActionTypes.REGISTER_SUCCESS,
                payload: response.data.data
            });
           history.push('/confirm')
        }
        else{
          alert('Invalid details')
        }
    } 
    catch(err) {
        dispatch(registerFailed(err.response.data));
    }
}

export const logOut = () =>  {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
 
    return {
        type: ActionTypes.LOGOUT_SUCCESS,
    }

}

export const checkAuthState = () => (dispatch) => {
   
     const token = localStorage.getItem('token')
     if(!token){
         dispatch(logOut())
     } else{    
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
        if(expirationDate <=  new Date()) {
            dispatch(logOut())
        }else{
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        }
     }

}



export const checkAuthTimeOut = (expirationTme) =>  (dispatch) =>{
    
        setTimeout(()=> {
            dispatch(logOut())
        }, expirationTme * 1000)
  
}


export const verifyEmail = (token) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify(token);

      const response = await axios.post(baseUrl + 'verify', body, config)
      dispatch(emailSucess(response.data))
    
}

export const forgetpassword = (email) => async (dispatch) => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify(email);

      try{
        const response = await axios.post(baseUrl + 'password/forgot', body, config)
        if(response.data.status === true) {
            dispatch(ActionTypes.RESET_SUCCESS);
        }else if(response.data.message === false){
            alert('The Email you provided does not exist')
        }
      }
      catch(err){
            dispatch(resetFail(err.response.data))
      }

}

export const resetpassword =  ({payload}) => async (dispatch) => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify(payload)

      try{
        const response = await axios.post(baseUrl + 'password/reset', body, config)
        console.log(response);
        if(response.data.status === true){
            dispatch({
                type: ActionTypes.RESET_PASSWORD,
                payload: response.data.data
            })
        }else{
            alert('failure')
        }
      }
      catch (err){
            dispatch(resetFail(err.response.data))
      }
}

