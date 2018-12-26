import { addValueByDottedPath, getValueByDottedPath, mergeReducers } from './utils';
import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';

/* exported for testing only */
export const replaceReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'replaceReducer (private method of BrickManager)'
);

const addSelectors = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'addSelectors (private method of BrickManager)'
);

const addSaga = Symbol(process.env.NODE_ENV === 'production' ? undefined : 'addSaga (private method of BrickManager)');

const saveReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'saveReducer (private method of BrickManager)'
);

const loadReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'loadReducer (private method of BrickManager)'
);

const hasReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'hasReducer (private method of BrickManager)'
);

export default class {
    constructor({ store, reducer = s => s, sagaMiddleware }) {
        this.store = store;
        this.originalReducer = reducer;
        this.additionalReducers = {};
        this.sagaMiddleware = sagaMiddleware;
    }

    installBrick(storePath, brick) {
        this.installBricks({ [storePath]: brick });
    }

    installBricks(bricks) {
        let changed = false;
        Object.entries(bricks)
            .filter(([storePath]) => !this[hasReducer](storePath))
            .forEach(([storePath, { reducer, selectors, saga }]) => {
                changed = true;
                this[saveReducer](storePath, reducer);
                this[addSelectors](storePath, selectors);
                this[addSaga](saga);
            });
        if (changed) {
            this[replaceReducer]();
        }
    }

    [replaceReducer]() {
        this.store.replaceReducer(mergeReducers(this.originalReducer, this.additionalReducers));
    }

    [saveReducer](storePath, reducer) {
        this.additionalReducers = addValueByDottedPath(this.additionalReducers, storePath, reducer);
    }

    [addSelectors](storePath, selectors) {
        registerSelectorsForUseWithGlobalState(storePath, selectors);
    }

    [addSaga](saga) {
        this.sagaMiddleware.run(saga);
    }

    [loadReducer](storePath) {
        return getValueByDottedPath(this.additionalReducers, storePath);
    }

    [hasReducer](storePath) {
        return this[loadReducer](storePath) !== null;
    }
}
