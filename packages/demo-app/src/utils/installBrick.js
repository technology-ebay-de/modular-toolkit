import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import { installReducer } from '.';

export default ({ path, module: { reducer, saga, selectors }, sagaMiddleware, store }) => {
    registerSelectorsForUseWithGlobalState(path, selectors);
    installReducer(store)(path)(reducer);
    sagaMiddleware.run(saga);
};
