import { applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { OneOff } from './one-off';
import { Auth } from './auth';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
                oneoff: OneOff,
                auth: Auth
        }), applyMiddleware(thunk , logger
            )
    )
    return store;
}