import { forEachPathSegment } from '.';

export default (object, path, value, overwrite = true) => {
    const returnValue = { ...object };
    let curr = returnValue;
    forEachPathSegment(path, (segment, isLast) => {
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
    });
    return returnValue;
};
