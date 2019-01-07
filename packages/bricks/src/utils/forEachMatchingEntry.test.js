import forEachMatchingEntry from './forEachMatchingEntry';

// prettier-ignore
const testCases = [
    [
        'an empty object', // description of input object
        'not called', // description of executor function calls
        0, // expected result
        {}, // input object
        [] // array with arguments that the executor function is called with
    ],
    [
        'an object that contains no matching entries',
        'not called',
        0,
        { foo: 'FOO' },
        []
    ],
    [
        'an object that contains one matching entry',
        'called with the matching entry',
        1,
        { bar: 'BAR' },
        [[ 'bar', 'BAR' ]]
    ],
    [
        "an object that contains one entry that matches and one that doesn't",
        'called with the matching entry',
        1,
        { foo: 'FOO', bar: 'BAR' },
        [[ 'bar', 'BAR' ]]
    ]
];

test.each(testCases)(
    'When I call forEachMatchingEntry with %s, the executor function is %s and the result is %d',
    (inputDesc, callsDesc, expected, o, calls) => {
        const predicate = (key, value) => key === 'bar' && value === 'BAR';
        const func = jest.fn();
        const result = forEachMatchingEntry(o, predicate, func);
        expect(func.mock.calls).toEqual(calls);
        expect(result).toEqual(expected);
    }
);
