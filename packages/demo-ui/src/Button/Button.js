import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

function Button({ label, handleClick }) {
    return (
        <button className="demo-ui-button" onClick={handleClick}>
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Button;
