// Courtesy of David Walsh
// https://davidwalsh.name/javascript-deep-merge

function isMergeableObject(val) {
    const nonNullObject = val && typeof val === 'object';

    return (
        nonNullObject &&
        Object.prototype.toString.call(val) !== '[object RegExp]' &&
        Object.prototype.toString.call(val) !== '[object Date]'
    );
}

function arrayMerge(target, source) {
    const destination = target.slice();
    source.forEach((e, i) => {
        if (typeof destination[i] === 'undefined') {
            destination[i] = e;
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e);
        } else if (target.indexOf(e) === -1) {
            destination.push(e);
        }
    });
    return destination;
}

function mergeObject(target, source) {
    const destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(key => (destination[key] = target[key]));
    }
    Object.keys(source).forEach(key => {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = source[key];
        } else {
            destination[key] = deepmerge(target[key], source[key]);
        }
    });
    return destination;
}

function deepmerge(target, source) {
    const array = Array.isArray(source);

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source) : source;
    }
    return mergeObject(target, source);
}

export default deepmerge;
