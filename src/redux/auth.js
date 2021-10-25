import { AUTH_START, AUTH_SUCCESS, LOGOUT_SUCCESS, REGISTER_START } from "./actiontypes";

export const Auth = (state = {
                token: null,
                isloading: false,
                error: null
}, action) => {
    switch(action.type) {
        case REGISTER_START:
        case AUTH_START:
            return {...state, token: null, isloading: true, error: null}
        case AUTH_SUCCESS:
            return {...state, token: action.payload  , isloading: false, error: null}
        case LOGOUT_SUCCESS:
            return {...state, token: null, isloading:false, error: null}
        default:
            return state;
    }
}