import React from 'react';
import BrickManagerContext from './BrickManagerContext';

export default bricks => Component => props => (
    <BrickManagerContext.Consumer>
        {brickManager => {
            brickManager.installBricks(bricks);
            return <Component {...props} />;
        }}
    </BrickManagerContext.Consumer>
);
