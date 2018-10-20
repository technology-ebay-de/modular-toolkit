import { forEachPathSegment } from '.';

export default (object, path, value = null) => {
    const returnValue = { ...object };
    let curr = returnValue;
    forEachPathSegment(path, (segment, isLast) => {
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
};
