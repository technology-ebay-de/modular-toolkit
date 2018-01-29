import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../shared/Header';

function App({ appTitle, pageTitle }) {
    return (
        <div>
            <Header appTitle={appTitle} pageTitle={pageTitle} />
            <section>
                <header>
                    <h1>Welcome to the demo app!</h1>
                </header>
            </section>
        </div>
    );
}

App.propTypes = {
    appTitle: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired
};

function mapStateToProps({ appTitle, pageTitle }) {
    return {
        appTitle,
        pageTitle
    };
}

export default connect(mapStateToProps)(App);
