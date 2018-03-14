import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createInitialState from './createInitialState';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const initialState = createInitialState();

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};
