import { mergeObjects, combineNestedReducers } from '.';

export default (originalReducer, additionalReducers) => {
    const combinedAdditionalReducers = combineNestedReducers(additionalReducers);
    return (state = {}, action = {}) => {
        const nextStateFromOriginalReducer = mergeObjects(state, originalReducer(state, action));
        const nextStateFromCombinedAdditionalReducers = combinedAdditionalReducers(
            nextStateFromOriginalReducer,
            action
        );
        return mergeObjects(nextStateFromOriginalReducer, nextStateFromCombinedAdditionalReducers);
    };
};
