import React from 'react';
import { PageHeader } from '../';
import { HackerNews } from '@modular-toolkit/demo-module';
import { Gists } from '@modular-toolkit/other-demo-module';
import PropTypes from 'prop-types';
import { Button } from '@modular-toolkit/demo-ui';
import './home-page.css';

const HomePage = ({ changeColor }) => (
    <main className="home-page">
        <PageHeader />
        <section className="section">
            <HackerNews />
        </section>
        <section className="section">
            <Gists />
        </section>
        <section className="section">
            <Button label="Change Color" handleClick={changeColor} />
        </section>
    </main>
);

HomePage.propTypes = {
    changeColor: PropTypes.func.isRequired
};

export default HomePage;
