import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { initialState as hackerNewsInitialState } from '@react-modular-toolkit/demo-module';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const initialState = {
    page: {
        appTitle: 'React Modular Toolkit Demo',
        pageTitle: 'Home'
    },
    modules: {
        hackerNews: hackerNewsInitialState
    }
};

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};
