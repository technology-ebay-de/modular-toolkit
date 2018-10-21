import { isObject } from '.';

function mergeObjects(target, source) {
    const destination = {};
    if (isObject(target)) {
        Object.keys(target).forEach(key => (destination[key] = target[key]));
    }
    Object.keys(source).forEach(key => {
        if (!isObject(source[key]) || !target[key]) {
            destination[key] = source[key];
        } else {
            destination[key] = mergeObjects(target[key], source[key]);
        }
    });
    return destination;
}

export default mergeObjects;
