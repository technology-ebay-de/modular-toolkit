import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';

export default class {
    constructor({ store, reducer = s => s, sagaMiddleware }) {
        this.store = store;
        this.initialReducer = reducer;
        this.storePaths = {};
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
        this.storePaths[storePathName] = (state = {}, action) =>
            this.reducers[storePathName] ? this.reducers[storePathName](state, action) : state;

        this.store.replaceReducer((state = {}, action) => {
            let nextState = this.initialReducer(state, action);
            let hasChanges = state !== nextState;
            nextState = Object.keys(this.storePaths).reduce(
                (incompleteState, storePath) => {
                    const red = this.storePaths[storePath];
                    const currentStorePathState = nextState[storePath];
                    const newStorePathState = red(currentStorePathState, action);
                    hasChanges = hasChanges || currentStorePathState !== newStorePathState;

                    const nextIncompleteState = { ...incompleteState };
                    nextIncompleteState[storePath] = newStorePathState;
                    return nextIncompleteState;
                },
                { ...nextState }
            );

            return hasChanges ? nextState : state;
        });
        this.reducers[storePathName] = reducer;
    }
}
