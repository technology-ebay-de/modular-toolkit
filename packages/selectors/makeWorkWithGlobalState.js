import rebaseSelector from './rebaseSelector';

const cache = new Map();

export default selector => {
    if (!selector) {
        throw new Error(
            'Tried to make undefined selector work with global state – ' +
                'please make sure your selector module is exported correctly'
        );
    }
    if (cache.has(selector)) {
        return cache.get(selector);
    }
    if (selector.requiresGlobalState) {
        return selector;
    }
    const rebasedSelector = state => {
        if (!selector.hasOwnProperty('globalStateContext')) {
            throw new Error(
                `This selector was not registered for use with global state: \n\n${selector} \n\n` +
                    'Did you forget to call the "registerSelectorForUseWithGlobalState" with this reducer?\n'
            );
        }
        const { path } = selector.globalStateContext;
        return rebaseSelector(path, selector)(state);
    };
    rebasedSelector.requiresGlobalState = true;
    cache.set(selector, rebasedSelector);
    return rebasedSelector;
};
