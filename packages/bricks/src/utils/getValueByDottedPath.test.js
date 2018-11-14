import getValueByDottedPath from './getValueByDottedPath';

// prettier-ignore
const testCases = [
    [
        { bla: 'BLA' },
        'bla',
        'BLA'
    ],
    [
        { bla: 0 },
        'bla',
        0
    ],
    [
        { bla: { bla: [0] } },
        'bla.bla',
        [0]
    ],
    [
        { bla: 'BLA' },
        'blub',
        null
    ],
    [
        { bla: { blub: 'BLUB' } },
        'bla.blub',
        'BLUB'
    ],
    [
        { bla: { blub: 'BLUB' } },
        'bla.bla',
        null
    ],
    [
        { bla: { di: { blub: 'BLUB' } } },
        'bla.di.blub',
        'BLUB'
    ],
    [
        { bla: { di: { blub: 'BLUB' } } },
        'bla',
        { di: { blub: 'BLUB' } },
    ],
    [
        { bla: { di: { blub: 'BLUB' } } },
        'bla.di',
        { blub: 'BLUB' },
    ],
    [
        { bla: { di: { blub: 'BLUB' } }, gna: 'GNA' },
        'bla.di',
        { blub: 'BLUB' },
    ],
    [
        { bla: () => {} },
        'bla.di',
        null
    ],
    [
        { bla: 'bla' },
        'bla.di',
        null
    ]
];

test.each(testCases)('For object %j and path %s, the value by dotted path is %j', (object, path, expected) =>
    expect(getValueByDottedPath(object, path)).toEqual(expected)
);
