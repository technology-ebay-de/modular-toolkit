import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../shared/Header';
import { HackerNews } from '@react-modular-toolkit/demo-module';
import './about-me.css';

function AboutMe({ appTitle, pageTitle }) {
    return (
        <div>
            <Header appTitle={appTitle} pageTitle={pageTitle} />
            <section>
                <header>
                    <h1>I have so much to say about myself, where to begin?</h1>
                </header>
                <HackerNews />
            </section>
        </div>
    );
}

AboutMe.propTypes = {
    appTitle: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired
};

function mapStateToProps({ page: { appTitle, pageTitle } }) {
    return {
        appTitle,
        pageTitle
    };
}

export default connect(mapStateToProps)(AboutMe);
