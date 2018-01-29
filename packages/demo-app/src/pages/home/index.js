import React from 'react';
import ReactDOM from 'react-dom';
import hello from '@react-modular-toolkit/demo-module';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';

hello();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
