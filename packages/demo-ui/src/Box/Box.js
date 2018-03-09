import React from 'react';
import PropTypes from 'prop-types';

import './box.css';

function Box({ children }) {
    return <article className="demo-ui-box">{children}</article>;
}

Box.propTypes = {
    children: PropTypes.node
};

export default Box;
