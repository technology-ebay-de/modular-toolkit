import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

function Header({ title }) {
    return (
        <header className="demo-ui-header">
            <h1>{title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
