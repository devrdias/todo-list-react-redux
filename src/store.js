import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// cria middlewares
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// criar store a partir do estado definido no /reducer/index.js
const store = createStore(
    reducers,
    composeEnhancers(
        // applyMiddleware(logger)
    )
);

export default store;