import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';

function Footer({ children }) {
    return <footer className="demo-ui-footer">{children}</footer>;
}

Footer.propTypes = {
    children: PropTypes.node
};

export default Footer;
