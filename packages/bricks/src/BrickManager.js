import { addValueByDottedPath, walkObject, getValueByDottedPath, filterObject, mergeObjects } from './utils';
import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';

/* exported for testing only */
export const addReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'addReducer (private method of BrickManager)'
);

const addSelectors = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'addSelectors (private method of BrickManager)'
);

const addSaga = Symbol(process.env.NODE_ENV === 'production' ? undefined : 'addSaga (private method of BrickManager)');

const createInitialReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'createInitialReducer (private method of BrickManager)'
);

const saveReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'saveReducer (private method of BrickManager)'
);

const loadReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'loadReducer (private method of BrickManager)'
);

const hasReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'hasReducer (private method of BrickManager)'
);

const PREP_STATE = 'modular-toolkit/PREP_STATE';

export default class {
    constructor({ store, reducer = s => s, sagaMiddleware }) {
        this.store = store;
        this.initialReducer = this[createInitialReducer](reducer);
        this.initialStateProps = Object.keys(store.getState());
        this.store.replaceReducer(this.initialReducer);
        this.reducers = {};
        this.sagaMiddleware = sagaMiddleware;
    }

    installBricks(bricks) {
        for (const [storePath, module] of Object.entries(bricks)) {
            this.installBrick(storePath, module);
        }
    }

    installBrick(storePath, { reducer, saga, selectors }) {
        if (this[hasReducer](storePath)) {
            return;
        }
        this[addReducer](storePath, reducer);
        this[addSelectors](storePath, selectors);
        this[addSaga](saga);
    }

    [addReducer](storePath, reducer) {
        this.store.dispatch({ type: PREP_STATE, storePath });
        this[saveReducer](storePath, reducer);

        this.store.replaceReducer((state = {}, action) => {
            const stateForInitialReducer = filterObject(state, this.initialStateProps);
            let stateAfterInitialReduction = this.initialReducer(stateForInitialReducer, action);
            let hasChanges = stateForInitialReducer !== stateAfterInitialReduction;

            // this is important – if we don't merge the state with the state after
            // running through the initial reducer (i.e. the one the Redux store was
            // created with), it will kick out the state from the reducers added later
            // stateAfterInitialReduction = { ...state, ...stateAfterInitialReduction };
            stateAfterInitialReduction = mergeObjects(state, stateAfterInitialReduction);

            let finalState = { ...stateAfterInitialReduction };
            walkObject(stateAfterInitialReduction, (currentSubState, path) => {
                const currReducer = this[loadReducer](path);
                if (typeof currReducer !== 'function') {
                    return;
                }
                const nextSubState = currReducer(currentSubState, action);
                if (nextSubState !== currentSubState) {
                    finalState = addValueByDottedPath(finalState, path, nextSubState);
                    hasChanges = true;
                }
            });

            return hasChanges ? finalState : state;
        });
    }

    [addSelectors](storePath, selectors) {
        registerSelectorsForUseWithGlobalState(storePath, selectors);
    }

    [addSaga](saga) {
        this.sagaMiddleware.run(saga);
    }

    [createInitialReducer](reducer) {
        return (state = {}, action) => {
            switch (action.type) {
                case PREP_STATE:
                    return {
                        ...addValueByDottedPath(state, action.storePath, {}, false)
                    };
                default:
                    return reducer(state, action);
            }
        };
    }

    [saveReducer](storePath, reducer) {
        this.reducers = addValueByDottedPath(this.reducers, storePath, reducer);
    }

    [loadReducer](storePath) {
        return getValueByDottedPath(this.reducers, storePath);
    }

    [hasReducer](storePath) {
        return this[loadReducer](storePath) !== null;
    }
}
