import { mergeObjects, combineNestedReducers } from '.';

export default (originalReducer, additionalReducers) => {
    const combinedAdditionalReducers = combineNestedReducers(additionalReducers);
    return (state = {}, action = {}) => {
        const nextStateFromOriginalReducer = originalReducer(state, action);
        const nextStateFromCombinedAdditionalReducers = combinedAdditionalReducers(state, action);
        return mergeObjects(nextStateFromOriginalReducer, nextStateFromCombinedAdditionalReducers);
    };
};
