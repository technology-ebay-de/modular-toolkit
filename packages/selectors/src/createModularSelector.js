import { createSelector } from 'reselect';
import makeWorkWithGlobalState from './makeWorkWithGlobalState';

export default (...args) => {
    const createSelectorArgs = args;
    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] === undefined) {
            throw new Error('WTF');
        }
        createSelectorArgs[i] = makeWorkWithGlobalState(args[i]);
    }
    const selector = state => createSelector.apply(null, createSelectorArgs)(state);
    selector.requiresGlobalState = true;
    return selector;
};
