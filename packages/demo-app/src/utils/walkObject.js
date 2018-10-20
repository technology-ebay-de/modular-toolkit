function walkObject(obj, callback, segments = []) {
    for (const [property, value] of Object.entries(obj)) {
        if (value === null || typeof value === 'undefined') {
            continue;
        }
        const nextSegments = segments.concat([property]);
        callback(value, nextSegments.join('.'));
        if (typeof value === 'object' && Object.keys(value).length > 0) {
            walkObject(value, callback, nextSegments);
        }
    }
}
export default walkObject;
