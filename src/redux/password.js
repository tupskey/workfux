import * as ActionType from './actiontypes';

const initialState = {}

export const Password = (state = initialState , action) => {

    switch(action.type) {
        case ActionType.RESET_PASSWORD:
            return {state = action.payload}
        default:
            return state;
    }
}