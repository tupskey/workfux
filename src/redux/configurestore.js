import { applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { OneOff } from './one-off';
import { Auth } from './auth';
import { Services } from './services';
import { reDirect } from './redirect';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
                oneoff: OneOff,
                auth: Auth,
                services: Services,
                redirect: reDirect
        }),
         applyMiddleware(thunk , logger)
    )
    return store;
}