import React from 'react';
import BrickManagerContext from './BrickManagerContext';
import BrickManager from './BrickManager';
import PropTypes from 'prop-types';

const BrickProvider = ({ store, reducer, sagaMiddleware, children }) => (
    <BrickManagerContext.Provider value={new BrickManager({ store, reducer, sagaMiddleware })}>
        {children}
    </BrickManagerContext.Provider>
);

BrickProvider.propTypes = {
    store: PropTypes.object.isRequired,
    reducer: PropTypes.func,
    sagaMiddleware: PropTypes.object.isRequired,
    children: PropTypes.node
};

export default BrickProvider;
