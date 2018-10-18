/**
 * Based on reedux
 * Copyright (c) 2017 Silviu Marian
 * https://github.com/Silviu-Marian/reedux/blob/master/LICENSE
 */
const stores = new WeakMap();

export default (store, existingReducer) => {
    const { currentStorePaths, reducersByStorePath, reducersByActionType, combinedReducer } = stores.get(store) || {
        currentStorePaths: {},
        reducersByStorePath: {},
        reducersByActionType: {},
        combinedReducer: s => s
    };

    stores.set(store, {
        currentStorePaths,
        reducersByStorePath,
        reducersByActionType,
        combinedReducer: existingReducer || combinedReducer
    });

    // addStorePath
    return (storePathName, initialState = {}) => {
        // this is the store level reducer - which looks for store path level reducers
        currentStorePaths[storePathName] = (state = initialState, action) => {
            const { type } = action;
            let newState = state;

            // execute reducers by type if any
            if (reducersByActionType[storePathName][type]) {
                newState = reducersByActionType[storePathName][type].reduce(
                    (currentState, reducer) => reducer(currentState, action),
                    newState
                );
            }

            // execute store path level reducers if any
            if (reducersByStorePath[storePathName].length) {
                return reducersByStorePath[storePathName].reduce((stt, reducer) => reducer(stt, action), newState);
            }
            return newState;
        };

        // store path level reducers, by action type
        reducersByStorePath[storePathName] = reducersByStorePath[storePathName] || [];
        reducersByActionType[storePathName] = reducersByActionType[storePathName] || {};

        // now everything is set up properly and we can replace the reducers on the store
        store.replaceReducer((state = {}, action) => {
            const staticReducer = existingReducer || combinedReducer;
            let nextState = staticReducer(state, action);
            let hasChanges = state !== nextState;
            nextState = Object.keys(currentStorePaths).reduce(
                (incompleteState, storePath) => {
                    const reducer = currentStorePaths[storePath];
                    const currentStorePathState = nextState[storePath];
                    const newStorePathState = reducer(currentStorePathState, action);
                    hasChanges = hasChanges || currentStorePathState !== newStorePathState;

                    const nextIncompleteState = { ...incompleteState };
                    nextIncompleteState[storePath] = newStorePathState;
                    return nextIncompleteState;
                },
                { ...nextState }
            );

            return hasChanges ? nextState : state;
        });

        return reducer => reducersByStorePath[storePathName].push(reducer);
    };
};
