import React from 'react';
import './list.css';
import PropTypes from 'prop-types';

function List({ children }) {
    return <ul className="demo-ui-list">{children}</ul>;
}

List.propTypes = {
    children: PropTypes.node
};

export default List;
