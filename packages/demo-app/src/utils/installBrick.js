import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import { installReducer } from '.';

let addStorePath = null;

export default ({ path, module: { reducer, saga, selectors }, sagaMiddleware, store, rootReducer }) => {
    registerSelectorsForUseWithGlobalState(path, selectors);
    if (!addStorePath) {
        addStorePath = installReducer(store, rootReducer);
    }
    addStorePath(path)(reducer);
    sagaMiddleware.run(saga);
};
