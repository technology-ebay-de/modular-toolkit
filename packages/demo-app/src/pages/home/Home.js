import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../shared/Header';
import { HackerNews } from '@react-modular-toolkit/demo-module';
import './home.css';

function Home({ appTitle, pageTitle }) {
    return (
        <div>
            <Header appTitle={appTitle} pageTitle={pageTitle} />
            <section>
                <header>
                    <h1>Welcome to the demo app!</h1>
                </header>
                <HackerNews />
            </section>
        </div>
    );
}

Home.propTypes = {
    appTitle: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired
};

function mapStateToProps({ page: { appTitle, pageTitle } }) {
    return {
        appTitle,
        pageTitle
    };
}

export default connect(mapStateToProps)(Home);
