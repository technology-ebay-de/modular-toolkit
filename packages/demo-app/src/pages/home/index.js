import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Home from './Home';
import registerSelectors from './registerSelectors';

const store = configureStore();

registerSelectors();

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
);
