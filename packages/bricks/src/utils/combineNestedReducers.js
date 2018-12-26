import { isObject } from '.';
import combineReducers from '../combineReducers';

export default function combineNestedReducers(nestedReducers) {
    const reducers = {};
    for (const [namespace, reducerOrObject] of Object.entries(nestedReducers)) {
        let reducer;
        if (isObject(reducerOrObject)) {
            reducer = combineNestedReducers(reducerOrObject);
        } else {
            reducer = reducerOrObject;
        }
        reducers[namespace] = reducer;
    }
    return combineReducers(reducers);
}
