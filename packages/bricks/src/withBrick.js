import React from 'react';
import BrickManagerContext from './BrickManagerContext';
import BrickInstaller from './BrickInstaller';

export default (storePath, brick) => WrappedComponent => props => (
    <BrickManagerContext.Consumer>
        {brickManager => (
            <BrickInstaller
                brickManager={brickManager}
                bricks={{ [storePath]: brick }}
                WrappedComponent={WrappedComponent}
                wrappedComponentProps={props}
            />
        )}
    </BrickManagerContext.Consumer>
);
