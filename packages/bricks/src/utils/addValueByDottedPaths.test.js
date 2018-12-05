import addValueByDottedPaths from './addValueByDottedPaths';

// prettier-ignore
const testCases = [
    [
        {},
        ['bla', 'blub'],
        'BALUBB!',
        false,
        { bla: 'BALUBB!', blub: 'BALUBB!'}
    ],
    [
        { bla: { blub: 'BLUB' } },
        ['bla.blub', 'bla.blo'],
        'BALUBB!',
        false,
        { bla: { blub: 'BLUB', blo: 'BALUBB!'}}
    ],
    [
        { bla: { blub: 'BLUB' } },
        ['bla.blub', 'bla.blo'],
        'BALUBB!',
        true,
        { bla: { blub: 'BALUBB!', blo: 'BALUBB!'}}
    ]
]
test.each(testCases)(
    'When my object is %j and my path is %s, my value is %j and the overwrite flag is %p, ' +
        'the result of calling addValueByDottedPath is %j',
    (object, paths, value, overwrite, expected) =>
        expect(addValueByDottedPaths(object, paths, value, overwrite)).toEqual(expected)
);
