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

    addStorePath(storePathName) {
        this.storePaths[storePathName] = (state = {}, action) => {
            const reducer = this.retrieveReducer(storePathName);
            return reducer ? reducer(state, action) : state;
        };
    }

    addReducer(storePathName, reducer) {
        this.addStorePath(storePathName);
        this.storeReducer(storePathName, reducer);

        this.store.replaceReducer((state = {}, action) => {
            let nextState = { ...state, ...this.initialReducer(state, action) };
            let hasChanges = state !== nextState;
            nextState = this.addValueByDottedPath(nextState, storePathName);
            let curr = nextState;
            this.forEachPathSegment(storePathName, (segment, isLast, currPath) => {
                const objectOrReducer = this.retrieveReducer(currPath);
                if (typeof objectOrReducer === 'function') {
                    const nextSegmentState = objectOrReducer(curr[segment], action);
                    if (nextSegmentState !== curr[segment]) {
                        curr[segment] = nextSegmentState;
                        hasChanges = true;
                    }
                }
                curr = curr[segment];
            });
            return hasChanges ? nextState : state;
        });
    }

    storeReducer(storePathName, reducer) {
        this.reducers = this.addValueByDottedPath(this.reducers, storePathName, reducer);
    }

    addValueByDottedPath(object, path, value = null) {
        const returnValue = { ...object };
        let curr = returnValue;
        this.forEachPathSegment(path, (segment, isLast) => {
            if (isLast) {
                if (value) {
                    curr[segment] = value;
                }
                return;
            }
            if (!curr[segment]) {
                curr[segment] = {};
            }
            curr = curr[segment];
        });
        return returnValue;
    }

    forEachPathSegment(path, callback) {
        const pathSegments = path.split('.');
        const currSegments = [];
        pathSegments.forEach((segment, index) => {
            currSegments.push(segment);
            return callback(segment, index === pathSegments.length - 1, currSegments.join('.'));
        });
    }

    retrieveReducer(storePathName) {
        return storePathName.split('.').reduce((o, i) => o[i], this.reducers);
    }
}
