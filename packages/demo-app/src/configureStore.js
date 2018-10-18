import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createInitialState from './createInitialState';
import rootReducer from './rootReducer';
import hackerNews from '@modular-toolkit/demo-module';
import gists from '@modular-toolkit/other-demo-module';
import { installBrick } from './utils';

const initialState = createInitialState();

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    installBrick({ path: 'hackerNews', module: hackerNews, sagaMiddleware, store, rootReducer });
    installBrick({ path: 'gists', module: gists, sagaMiddleware, store, rootReducer });
    return store;
};
