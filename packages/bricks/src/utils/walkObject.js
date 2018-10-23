import { isObject } from '.';

function walkObject(obj, callback, segments = []) {
    for (const [property, value] of Object.entries(obj)) {
        if (!isObject(value)) {
            continue;
        }
        const nextSegments = segments.concat([property]);
        callback(value, nextSegments.join('.'));
        if (Object.keys(value).length > 0) {
            walkObject(value, callback, nextSegments);
        }
    }
}
export default walkObject;
