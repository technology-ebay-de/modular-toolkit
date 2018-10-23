import { Button } from '@modular-toolkit/demo-ui';
import PropTypes from 'prop-types';
import React from 'react';
import './page-header.css';

function PageHeader({ title, handleUpdatingNews, backgroundColor }) {
    return (
        <header className="page-header" style={{ backgroundColor }}>
            <h1>{title}</h1>
            <Button handleClick={handleUpdatingNews} label="Update News" />
        </header>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string,
    handleUpdatingNews: PropTypes.func,
    backgroundColor: PropTypes.string
};

export default PageHeader;
