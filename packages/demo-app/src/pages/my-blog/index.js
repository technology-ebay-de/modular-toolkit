import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import MyBlog from './MyBlog';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MyBlog />
    </Provider>,
    document.getElementById('app')
);
