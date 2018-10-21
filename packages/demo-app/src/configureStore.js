import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createInitialState from './createInitialState';
import reducer from './reducer';
import hackerNews from '@modular-toolkit/demo-module';
import gists from '@modular-toolkit/other-demo-module';
import { BrickManager } from '@modular-toolkit/bricks';
import saga from './sagas';

const initialState = createInitialState();

export default () => {
    const reduxDevToolsEnabled =
        typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined';
    const composeEnhancer = reduxDevToolsEnabled ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

    const sagaMiddleware = createSagaMiddleware();
    const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(saga);
    const brickManager = new BrickManager({ store, reducer, sagaMiddleware });
    brickManager.installBricks({
        'bricks.hackerNews': hackerNews,
        'bricks.gists': gists
    });
    return store;
};
