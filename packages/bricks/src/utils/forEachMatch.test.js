import forEachMatch from './forEachMatch';

// prettier-ignore
const testCases = [
    [
        'an empty array', // description of input array
        'not called', // description of executor function calls
        0, // expected result
        [], // input array
        [] // array with arguments that the executor function is called with
    ],
    [
        'an array that contains no matches',
        'not called',
        0,
        [ 'foo' ],
        []
    ],
    [
        'an array that contains one matching item',
        'called with the matching item',
        1,
        [ 'bar' ],
        [[ 'bar' ]]
    ],
    [
        "an array that contains one item that matches and one that doesn't",
        'called with the matching item',
        1,
        [ 'foo', 'bar' ],
        [[ 'bar' ]]
    ]
];

test.each(testCases)(
    'When I call forEachMatch with %s, the executor function is %s and the result is %d',
    (inputDesc, callsDesc, expected, arr, calls) => {
        const predicate = el => el === 'bar';
        const func = jest.fn();
        const result = forEachMatch(arr, predicate, func);
        expect(func.mock.calls).toEqual(calls);
        expect(result).toEqual(expected);
    }
);
