import React from 'react';
import BrickManagerContext from './BrickManagerContext';
import BrickInstaller from './BrickInstaller';

export default (storePath, brick, initialState) => WrappedComponent => props => (
    <BrickManagerContext.Consumer>
        {brickManager => (
            <BrickInstaller
                brickManager={brickManager}
                bricks={{ [storePath]: { ...brick, initialState } }}
                WrappedComponent={WrappedComponent}
                wrappedComponentProps={props}
            />
        )}
    </BrickManagerContext.Consumer>
);
