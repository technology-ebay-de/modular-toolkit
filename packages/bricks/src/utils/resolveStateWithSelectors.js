import { makeWorkWithGlobalState } from '@modular-toolkit/selectors';

function resolveStateWithSelectors(store, state) {
    return Object.entries(state).reduce((acc, [key, value]) => {
        switch (typeof value) {
            case 'function':
                return { ...acc, [key]: makeWorkWithGlobalState(value)(store.getState()) };
            case 'object':
                return { ...acc, [key]: resolveStateWithSelectors(store, value) };
            default:
                return { ...acc, [key]: value };
        }
    }, {});
}

export default resolveStateWithSelectors;
