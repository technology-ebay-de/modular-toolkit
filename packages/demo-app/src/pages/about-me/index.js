import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AboutMe from './AboutMe';
import registerSelectors from './registerSelectors';

const store = configureStore();

registerSelectors();

ReactDOM.render(
    <Provider store={store}>
        <AboutMe />
    </Provider>,
    document.getElementById('app')
);
