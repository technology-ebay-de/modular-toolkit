import { useContext } from 'react';
import BrickManagerContext from './BrickManagerContext';

export default (storePath, brick) => {
    const brickManager = useContext(BrickManagerContext);
    brickManager.installBrick(storePath, brick);
};
