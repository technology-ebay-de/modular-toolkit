import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BrickInstaller extends Component {
    constructor(props) {
        super(props);
        const { brickManager, bricks } = props;
        brickManager.installBricks(bricks);
    }

    render() {
        const { WrappedComponent, wrappedComponentProps } = this.props;
        return <WrappedComponent {...wrappedComponentProps} />;
    }
}

BrickInstaller.propTypes = {
    brickManager: PropTypes.object.isRequired,
    bricks: PropTypes.object.isRequired,
    WrappedComponent: PropTypes.func.isRequired,
    wrappedComponentProps: PropTypes.object
};
