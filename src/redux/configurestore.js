import { applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { OneOff } from './one-off';
import { Auth } from './reducers/auth';
import { Services } from './reducers/services';
import { reDirect } from './redirect';
import { ErrorHandler } from './reducers/error';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
                oneoff: OneOff,
                auth: Auth,
                services: Services,
                redirect: reDirect,
                error: ErrorHandler
        }),
         applyMiddleware(thunk , logger)
    )
    return store;
}