import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HomePage } from './components';
import configureStore from './configureStore';
import './main.css';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <HomePage />
        </Provider>
    );
}

render(<App />, document.getElementById('root'));
