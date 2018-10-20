import { addValueByDottedPath, walkObject } from '.';
import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';

// exported for testing only
export const saveReducer = Symbol('save reducer');
export const loadReducer = Symbol('load reducer');

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
        registerSelectorsForUseWithGlobalState(storePath, selectors);
        this.addReducer(storePath, reducer);
        this.sagaMiddleware.run(saga);
    }

    addReducer(storePathName, reducer) {
        this[saveReducer](storePathName, reducer);
        let shouldInitializeState = true;

        this.store.replaceReducer((state = {}, action) => {
            // console.log('~~~~~~~~~~~~~~~~~~~~', action.type); // PH_TODO
            let stateAfterInitialReduction = { ...state, ...this.initialReducer(state, action) };
            let hasChanges = state !== stateAfterInitialReduction;
            if (shouldInitializeState) {
                stateAfterInitialReduction = addValueByDottedPath(stateAfterInitialReduction, storePathName, {});
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

    [saveReducer](storePathName, reducer) {
        this.reducers = addValueByDottedPath(this.reducers, storePathName, reducer);
    }

    [loadReducer](storePathName) {
        return storePathName.split('.').reduce((o, i) => (o ? o[i] : null), this.reducers);
    }
}
