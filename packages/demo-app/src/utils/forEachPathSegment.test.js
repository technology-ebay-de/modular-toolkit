import forEachPathSegment from './forEachPathSegment';

// prettier-ignore
const testCases = [
    ['foo', jest.fn()],
    ['foo.bar', jest.fn()],
    ['foo.bar.bux', jest.fn()]
];

test.each(testCases)(
    'When I call “forEachPathSegment” with path %s, the callback is called correctly',
    (path, callback) => {
        forEachPathSegment(path, callback);
        return expect(callback.mock.calls).toMatchSnapshot();
    }
);
