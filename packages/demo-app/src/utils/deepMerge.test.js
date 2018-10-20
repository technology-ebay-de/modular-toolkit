import deepMerge from './deepMerge';

// prettier-ignore
const testCases = [
    [
        { foo: { bar: 'BAR' } },
        { foo: { baz: 'BAZ' } },
        { foo: { bar: 'BAR', baz: 'BAZ' } }
    ]
];

test.each(testCases)('Merging %j and %j results in %j', (a, b, expected) => expect(deepMerge(a, b)).toEqual(expected));
