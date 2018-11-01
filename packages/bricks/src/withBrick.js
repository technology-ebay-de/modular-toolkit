import React from 'react';
import BrickManagerContext from './BrickManagerContext';

export default (storePath, brick) => Component => props => (
    <BrickManagerContext.Consumer>
        {brickManager => {
            brickManager.installBrick(storePath, brick);
            return <Component {...props} />;
        }}
    </BrickManagerContext.Consumer>
);
