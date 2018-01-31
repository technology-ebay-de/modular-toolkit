import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../shared/Header';
import './my-blog.css';

function MyBlog({ appTitle, pageTitle }) {
    return (
        <div>
            <Header appTitle={appTitle} pageTitle={pageTitle} />
            <section>
                <header>
                    <h1>My blog is really interesting, please read</h1>
                </header>
            </section>
        </div>
    );
}

MyBlog.propTypes = {
    appTitle: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired
};

function mapStateToProps({ appTitle, pageTitle }) {
    return {
        appTitle,
        pageTitle
    };
}

export default connect(mapStateToProps)(MyBlog);
