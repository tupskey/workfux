import { AUTH_START, AUTH_SUCCESS, LOGOUT_SUCCESS, REGISTER_START } from "./actiontypes";

export const Auth = (state = {
                token: null,
                isloading: false,
                error: null,
                user: null
}, action) => {
    switch(action.type) {
        case REGISTER_START:
        case AUTH_START:
            return {...state, token: null, user: null, isloading: true, error: null}
        case AUTH_SUCCESS:
            return {...state, token: action.payload, user: action.payload, isloading: false, error: null}
        case LOGOUT_SUCCESS:
            return {...state, token: null, user: null, isloading:false, error: null}
        default:
            return state;
    }
}