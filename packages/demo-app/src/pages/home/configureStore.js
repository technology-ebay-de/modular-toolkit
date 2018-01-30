import { createStore } from 'redux';
import reducer from './reducer';
import { initialState as hackerNewsInitialState } from '@react-modular-toolkit/demo-module';

console.log('[PH_LOG] initialState:', hackerNewsInitialState); // PH_TODO
const initialState = {
    page: {
        appTitle: 'React Modular Toolkit Demo',
        pageTitle: 'Home'
    },
    modules: {
        hackerNews: hackerNewsInitialState
    }
};

export default () => createStore(reducer, initialState);
