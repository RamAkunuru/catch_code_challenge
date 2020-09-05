import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watchGetProductDetails } from './sagas/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// Using thunks
// const store = createStore(reducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchGetProductDetails);

export default store;
