import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const initialState = {
    page: {
        appTitle: 'React Modular Toolkit Demo',
        pageTitle: 'My Blog'
    }
};

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};
