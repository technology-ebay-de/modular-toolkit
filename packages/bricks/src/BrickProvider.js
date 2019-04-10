import React, { Component } from 'react';
import BrickManagerContext from './BrickManagerContext';
import BrickManager from './BrickManager';
import PropTypes from 'prop-types';

class BrickProvider extends Component {
    constructor(props) {
        super(props);
        const { store, reducer, sagaMiddleware } = this.props;
        this.state = {
            brickManager: new BrickManager({ store, reducer, sagaMiddleware })
        };
    }

    render() {
        const { children } = this.props;
        const { brickManager } = this.state;
        return <BrickManagerContext.Provider value={brickManager}>{children}</BrickManagerContext.Provider>;
    }
}

BrickProvider.propTypes = {
    store: PropTypes.object.isRequired,
    reducer: PropTypes.func,
    sagaMiddleware: PropTypes.func,
    children: PropTypes.node
};

export default BrickProvider;
