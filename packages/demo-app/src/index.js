import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PageHeader } from './components';
import configureStore from './configureStore';
import { HackerNews } from '@modular-toolkit/demo-module';
import './main.css';
import registerSelectors from './registerSelectors';

const store = configureStore();

registerSelectors();

function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <PageHeader />
                <HackerNews />
            </Fragment>
        </Provider>
    );
}

render(<App />, document.getElementById('root'));
