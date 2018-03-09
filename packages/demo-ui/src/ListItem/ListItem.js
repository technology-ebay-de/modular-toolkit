import React from 'react';
import './list-item.css';
import PropTypes from 'prop-types';

function ListItem({ children }) {
    return <li className="demo-ui-list-item">{children}</li>;
}

ListItem.propTypes = {
    children: PropTypes.node
};

export default ListItem;
