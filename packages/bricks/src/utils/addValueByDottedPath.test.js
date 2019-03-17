import addValueByDottedPath from './addValueByDottedPath';

// prettier-ignore
const testCases = [
    [
        { argh: {} },
        'argh',
        { argh: 'ARGH' },
        undefined,
        { argh: { argh: 'ARGH' } }
    ],
    [
        {},
        'bla.blub',
        'DUDEL',
        undefined,
        { bla: { blub: 'DUDEL' } }
    ],
    [
        {},
        'bla.dazwischen.blub',
        'DUDEL',
        undefined,
        { bla: { dazwischen: { blub: 'DUDEL' } } }
    ],
    [
        { bla: { hamwaschon: 'ham wa schon' } },
        'bla.dazwischen.blub',
        'DUDEL',
        undefined,
        { bla: { dazwischen: { blub: 'DUDEL' }, hamwaschon: 'ham wa schon' } }
    ],
    [
        { bla: { hamwaschon: 'ham wa schon' } },
        'bla.dazwischen.blub',
        'DUDEL',
        undefined,
        { bla: { dazwischen: { blub: 'DUDEL' }, hamwaschon: 'ham wa schon' } }
    ],
    [
        { bla: { blub: 'BLUB' } },
        'bla.blub',
        'BALUBB!',
        undefined,
        { bla: { blub: 'BALUBB!' } }
    ],
    [
        { bla: { blub: 'BLUB' } },
        'bla.blub',
        'BALUBB!',
        false,
        { bla: { blub: 'BLUB' } }
    ]
];

test.each(testCases)(
    'When my object is %j and my path is %s, my value is %j and the overwrite flag is %p, ' +
        'the result of calling addValueByDottedPath is %j',
    (object, path, value, overwrite, expected) =>
        expect(addValueByDottedPath(object, path, value, overwrite)).toEqual(expected)
);

// prettier-ignore
const throwingTestCases = [
    [
        { argh: 'argh' },
        'argh.barg',
        'farg',
        undefined
    ],
    [
        { argh: 'argh' },
        'argh.barg',
        'farg',
        true
    ]
];

test.each(throwingTestCases)(
    'When my object is %j and my path is %s, my value is %j and the overwrite flag is %p, ' +
        'calling addValueByDottedPath throws an error',
    (object, path, value, overwrite) => expect(() => addValueByDottedPath(object, path, value, overwrite)).toThrow()
);
