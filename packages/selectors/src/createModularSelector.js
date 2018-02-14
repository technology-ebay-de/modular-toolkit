/**
 * This is a drop in replacement for `reselect.createSelector` and is used
 * to create composed, cachable selectors.
 *
 * This drop-in replacement is required, because the original function provided
 * by `reselect` does not play nicely with the `modular-selectors` module.
 */

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
