import { forEachPathSegment, isObject } from '.';

export default (object, path, value, overwrite = true) => {
    const returnValue = { ...object };
    let curr = returnValue;
    let prevSegment = null;
    forEachPathSegment(path, (segment, isLast) => {
        if (!isObject(curr)) {
            throw new Error(`invalid path ${path} – you cannot overwrite existing leaf node ${prevSegment}`);
        }
        if (isLast) {
            if (value) {
                if (curr[segment] === undefined || overwrite) {
                    curr[segment] = value;
                }
            }
            return;
        }
        if (!curr[segment]) {
            curr[segment] = {};
        }
        curr = curr[segment];
        prevSegment = segment;
    });
    return returnValue;
};
