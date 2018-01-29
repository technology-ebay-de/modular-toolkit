import React from 'react';
import PropTypes from 'prop-types';
function Header({ appTitle, pageTitle }) {
    return (
        <header>
            <h1>
                <a href="./index.html">
                    <img src="./images/modular-toolkit-logo.svg" alt={appTitle} width="120" />
                </a>
            </h1>
            <h2>{pageTitle}</h2>
            <nav>
                <ul>
                    <li>
                        <a href="./about-me.html">About Me</a>
                    </li>
                    <li>
                        <a href="./my-blog.html">My Blog</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

Header.propTypes = {
    appTitle: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired
};

export default Header;
