import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    appTitle: 'React Modular Toolkit Demo',
    pageTitle: 'About Me'
};

export default () => createStore(reducer, initialState);
