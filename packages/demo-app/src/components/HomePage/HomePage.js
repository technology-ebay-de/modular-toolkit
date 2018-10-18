import React from 'react';
import { PageHeader } from '../';
import { HackerNews } from '@modular-toolkit/demo-module';
import { Gists } from '@modular-toolkit/other-demo-module';
import PropTypes from 'prop-types';

const HomePage = ({ backgroundColor, changeBackgroundColor }) => (
    <main style={{ backgroundColor }}>
        <PageHeader />
        <HackerNews />
        <Gists />
        <button onClick={changeBackgroundColor}>lime</button>
    </main>
);

HomePage.propTypes = {
    backgroundColor: PropTypes.string,
    changeBackgroundColor: PropTypes.func.isRequired
};

export default HomePage;
