import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import {
    addValueByDottedPath,
    getValueByDottedPath,
    mergeReducers,
    resolveStateWithSelectors,
    forEachMatchingEntry
} from './utils';

/* exported for testing only */
export const replaceReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'replace reducer (private method of BrickManager)'
);

export const prepareReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'prepare reducer (private method of BrickManager)'
);

const addSelectors = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'add selectors (private method of BrickManager)'
);

const addSaga = Symbol(process.env.NODE_ENV === 'production' ? undefined : 'add saga (private method of BrickManager)');

const saveReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'save reducer (private method of BrickManager)'
);

const loadReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'load reducer (private method of BrickManager)'
);

const hasReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'has reducer (private method of BrickManager)'
);

const store = Symbol(process.env.NODE_ENV === 'production' ? undefined : 'store (private property of BrickManager)');

const originalReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'original reducer (private property of BrickManager)'
);

/* exported for testing only */
export const additionalReducers = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'additional reducers (private property of BrickManager)'
);

const sagaMiddleware = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'saga middleware (private property of BrickManager)'
);

export default class {
    constructor({ store: storeInput, reducer: reducerInput = s => s, sagaMiddleware: sagaMiddlewareInput }) {
        this[store] = storeInput;
        this[originalReducer] = reducerInput;
        this[additionalReducers] = {};
        this[sagaMiddleware] = sagaMiddlewareInput;
    }

    installBrick(storePath, brick) {
        this.installBricks({ [storePath]: brick });
    }

    installBricks(bricks) {
        const changed = forEachMatchingEntry(
            bricks,
            storePath => !this[hasReducer](storePath),
            (storePath, { reducer, selectors, saga, initialState }) => {
                this[saveReducer](storePath, reducer, initialState);
                this[addSelectors](storePath, selectors);
                this[addSaga](saga);
            }
        );
        if (changed) {
            this[replaceReducer]();
        }
    }

    [prepareReducer](reducer, initialState) {
        if (!initialState) {
            return reducer;
        }
        const resolvedInitialState = resolveStateWithSelectors(this[store], initialState);
        return (state = resolvedInitialState, action) => reducer(state, action);
    }

    [replaceReducer]() {
        this[store].replaceReducer(mergeReducers(this[originalReducer], this[additionalReducers]));
    }

    [saveReducer](storePath, reducer, initialState) {
        const preparedReducer = this[prepareReducer](reducer, initialState);
        this[additionalReducers] = addValueByDottedPath(this[additionalReducers], storePath, preparedReducer);
    }

    [addSelectors](storePath, selectors) {
        registerSelectorsForUseWithGlobalState(storePath, selectors);
    }

    [addSaga](saga) {
        this[sagaMiddleware].run(saga);
    }

    [loadReducer](storePath) {
        return getValueByDottedPath(this[additionalReducers], storePath);
    }

    [hasReducer](storePath) {
        return this[loadReducer](storePath) !== null;
    }
}
