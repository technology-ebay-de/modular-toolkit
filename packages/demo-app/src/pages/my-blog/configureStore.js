import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    appTitle: 'React Modular Toolkit Demo',
    pageTitle: 'My Blog'
};

export default () => createStore(reducer, initialState);
