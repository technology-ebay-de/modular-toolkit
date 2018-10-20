import { addValueByDottedPath, walkObject, getValueByDottedPath } from '.';
import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';

// exported for testing only
export const saveReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'saveReducer (private method of BrickManager)'
);
export const loadReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'loadReducer (private method of BrickManager)'
);

export default class {
    constructor({ store, reducer = s => s, sagaMiddleware }) {
        this.store = store;
        this.initialReducer = reducer;
        this.reducers = {};
        this.sagaMiddleware = sagaMiddleware;
    }

    installBricks(bricks) {
        for (const [storePath, module] of Object.entries(bricks)) {
            this.installBrick(storePath, module);
        }
    }

    installBrick(storePath, { reducer, saga, selectors }) {
        this.addSelectors(storePath, selectors);
        this.addReducer(storePath, reducer);
        this.addSaga(saga);
    }

    addSelectors(storePath, selectors) {
        registerSelectorsForUseWithGlobalState(storePath, selectors);
    }

    addSaga(saga) {
        this.sagaMiddleware.run(saga);
    }

    addReducer(storePath, reducer) {
        this[saveReducer](storePath, reducer);
        let shouldInitializeState = true;

        this.store.replaceReducer((state = {}, action) => {
            let stateAfterInitialReduction = { ...state, ...this.initialReducer(state, action) };
            let hasChanges = state !== stateAfterInitialReduction;
            if (shouldInitializeState) {
                stateAfterInitialReduction = addValueByDottedPath(stateAfterInitialReduction, storePath, {});
                shouldInitializeState = false;
            }

            const finalState = { ...stateAfterInitialReduction };
            walkObject(stateAfterInitialReduction, (currentSubState, path) => {
                const currReducer = this[loadReducer](path);
                if (typeof currReducer !== 'function') {
                    return;
                }
                const nextSubState = currReducer(currentSubState, action);
                if (nextSubState !== currentSubState) {
                    addValueByDottedPath(finalState, path, nextSubState);
                    hasChanges = true;
                }
            });

            return hasChanges ? finalState : state;
        });
    }

    [saveReducer](storePath, reducer) {
        this.reducers = addValueByDottedPath(this.reducers, storePath, reducer);
    }

    [loadReducer](storePath) {
        return getValueByDottedPath(this.reducers, storePath);
    }
}
