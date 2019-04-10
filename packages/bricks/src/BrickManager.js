import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import {
    addValueByDottedPath,
    getValueByDottedPath,
    mergeReducers,
    resolveStateWithSelectors,
    forEachMatchingEntry
} from './utils';

const replaceReducer = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'replace reducer (private method of BrickManager)'
);

const prepareReducer = Symbol(
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

const additionalReducers = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'additional reducers (private property of BrickManager)'
);

const sagaMiddleware = Symbol(
    process.env.NODE_ENV === 'production' ? undefined : 'saga middleware (private property of BrickManager)'
);

export default class BrickManager {
    /**
     * Creates a new Brick Manager instance.
     *
     * @param options Configuration object with properties:
     *                * store – a Redux store
     *                * reducer – the original reducer used by the Redux store
     *                * sagaMiddleware – Redux Saga middleware used by the Redux store
     */
    constructor({ store: storeInput, reducer: reducerInput = s => s, sagaMiddleware: sagaMiddlewareInput }) {
        this[store] = storeInput;
        this[originalReducer] = reducerInput;
        this[additionalReducers] = {};
        this[sagaMiddleware] = sagaMiddlewareInput;
    }

    /**
     * Installs a new Brick.
     *
     * @param storePath The path in the global Redux store where the Brick should be installed
     * @param brick A Brick object with properties:
     *              * reducer The Brick's reducer
     *              * selectors The Brick's selectors
     *              * saga The Brick's saga
     * @param initialState State object used to initialize the Brick's part of the Redux state tree (optional)
     */
    installBrick(storePath, brick, initialState) {
        this.installBricks({ [storePath]: { ...brick, initialState } });
    }

    /**
     * Installs new Bricks.
     *
     * @param bricks An object where the keys are the store paths of each Brick to be installed, and the values
     *               are objects with properties:
     *               * reducer The Brick's reducer
     *               * selectors The Brick's selectors
     *               * saga The Brick's saga (optional)
     *               * initialState State object used to initialize the Brick's part of the Redux state tree (optional)
     */
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

    /* ---------------
     * Private methods
     * --------------- */

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
        if (this[sagaMiddleware]) {
            this[sagaMiddleware].run(saga);
        }
    }

    [loadReducer](storePath) {
        return getValueByDottedPath(this[additionalReducers], storePath);
    }

    [hasReducer](storePath) {
        return this[loadReducer](storePath) !== null;
    }

    /* --------------------------------------------------
     * Private methods and properties exposed for testing
     * -------------------------------------------------- */

    get additionalReducers() {
        return process.env.NODE_ENV === 'test' ? this[additionalReducers] : undefined;
    }

    get replaceReducer() {
        return process.env.NODE_ENV === 'test' ? this[replaceReducer] : undefined;
    }

    set replaceReducer(func) {
        if (process.env.NODE_ENV === 'test') {
            this[replaceReducer] = func;
        }
    }
}
