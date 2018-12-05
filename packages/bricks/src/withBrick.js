import React from 'react';
import BrickManagerContext from './BrickManagerContext';

export default (storePath, brick) => Component => props => (
    <BrickManagerContext.Consumer>
        {brickManager => {
            console.log('[PH_LOG] [withBrick] before installing', storePath); // PH_TODO
            brickManager.installBrick(storePath, brick);
            console.log('[PH_LOG] [withBrick] after installing', storePath); // PH_TODO
            return <Component {...props} />;
        }}
    </BrickManagerContext.Consumer>
);
