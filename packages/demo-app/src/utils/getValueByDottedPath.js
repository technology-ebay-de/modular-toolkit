import { isObject } from '.';

export default (object, path) =>
    path
        .split('.')
        .reduce(
            (acc, pathSegment) => (isObject(acc) ? (acc[pathSegment] === undefined ? null : acc[pathSegment]) : acc),
            object
        );
