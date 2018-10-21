/**
 * Simplified version of combineReducers from the Redux library:
 * no warning message when a state key is encountered for which there are no reducers
 * Copyright © 2015–present Dan Abramov
 */
export default function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i];

        if (process.env.NODE_ENV !== 'production' && typeof reducers[key] === 'undefined') {
            // eslint-disable-next-line no-console
            console.warn(`No reducer provided for key "${key}"`);
        }

        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);

    return function combination(state = {}, action) {
        let hasChanged = false;
        const nextState = {};
        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                throw new Error(`Undefined state for key ${key}, action:`, action);
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
