import isObject from './isObject';

// prettier-ignore
const testCases = [
    [{}, true],
    [{ bla: 'bla' }, true],
    [[], false],
    [null, false],
    [undefined, false],
    [666, false],
    ['foo', false],
    [class {}, false],
    [/.*/, false],
    [function () {}, false],
];

test.each(testCases)('For input %j, the function isObject returns %s', (input, expected) =>
    expect(isObject(input)).toEqual(expected)
);
