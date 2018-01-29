import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    appTitle: 'React Modular Toolkit Demo',
    pageTitle: 'Home'
};

export default () => createStore(reducer, initialState);
