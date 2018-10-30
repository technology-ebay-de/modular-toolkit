import { useContext } from 'react';
import BrickManagerContext from './BrickManagerContext';

export default bricks => {
    const brickManager = useContext(BrickManagerContext);
    brickManager.installBricks(bricks);
};
