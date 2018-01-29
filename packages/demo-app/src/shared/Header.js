import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';

function Header({ appTitle, pageTitle }) {
    return (
        <header className={styles.header}>
            <a href="./index.html">
                <img className={styles.logo} src="./images/modular-toolkit-logo.svg" alt={appTitle} />
            </a>
            <h1 className={styles.pageTitle}>{pageTitle}</h1>
            <nav>
                <ul className={styles.mainNavigation}>
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
