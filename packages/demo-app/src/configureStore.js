import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createInitialState from './createInitialState';
import reducer from './rootReducer';
import hackerNews from '@modular-toolkit/demo-module';
import gists from '@modular-toolkit/other-demo-module';
import { BrickManager } from './utils';

const initialState = createInitialState();

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
    const brickManager = new BrickManager({ store, reducer, sagaMiddleware });
    brickManager.installBricks({
        hackerNews,
        gists
    });
    return store;
};
