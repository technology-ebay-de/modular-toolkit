import React from 'react';
import BrickManagerContext from './BrickManagerContext';
import BrickInstaller from './BrickInstaller';

export default bricks => WrappedComponent => props => (
    <BrickManagerContext.Consumer>
        {brickManager => (
            <BrickInstaller
                brickManager={brickManager}
                bricks={bricks}
                WrappedComponent={WrappedComponent}
                wrappedComponentProps={props}
            />
        )}
    </BrickManagerContext.Consumer>
);
