import * as ActionTypes from './actiontypes';
import { baseUrl, history } from '../../shared/baseUrl';
import axios from 'axios'
import { returnError } from './errorAction';


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

export const resetSuccess = () => ({
    type: ActionTypes.RESET_SUCCESS,
    
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
        history.push('/dashboard')
       
        }else{
            alert('Invalid Login details')
        }
    } catch (err) {
        alert('Invalid Login Details')
        dispatch(authFail(err));
        dispatch(returnError(err.response.data.message))
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
           history.push('/email-verify')
        }
        else{
          alert('Invalid details')
        }
    } 
    catch(err) {
        dispatch(registerFailed(err.response.data));
        dispatch(returnError(err.response.data.message))
    }
}

export const logOut = () =>  {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    history.push('/')
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
    const body = {token};
      try{
            
      const response = await axios.post(baseUrl + 'verify', body, config)
      dispatch(emailSucess(response.data))
      history.push('/dashboard')
      }
      catch(err) {
        dispatch(returnError(err.response.data.message))
        alert('Invalid Registration details')
      }

    
}

export const forgetpassword = (email) => async (dispatch) => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = {email};

      try{
        const response = await axios.post(baseUrl + 'password/forgot', body, config)
        if(response.data.status === true) {
            dispatch(resetSuccess());
            alert('Check your email for confirmation')
            history.push('/email-verify')
        }else {
            alert('The Email you provided does not exist')
        }
      }
      catch(err){
            dispatch(resetFail(err.response))
      }

}

export const resetpassword =  (token, password, password_confirmation) => async (dispatch) => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = {token, password, password_confirmation}

      try{
        const response = await axios.post(baseUrl + 'password/reset', body, config)
        console.log(response);
        if(response.data.status === true){
            dispatch({
                type: ActionTypes.RESET_PASSWORD,
                payload: response.data
            });
            alert('Password Updated Successfully.....You can login now')
            history.push('/')
        }else{
            alert('failure')
        }
      }
      catch (err){
            dispatch(resetFail(err.response.data))
            dispatch(returnError(err.response.data.message))
      }
}

