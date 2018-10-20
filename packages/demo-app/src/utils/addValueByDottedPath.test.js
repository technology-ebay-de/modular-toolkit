import addValueByDottedPath from './addValueByDottedPath';

test.each([
    [
        {},
        'bla.blub',
        'DUDEL',
        {
            bla: {
                blub: 'DUDEL'
            }
        }
    ],
    [
        {},
        'bla.dazwischen.blub',
        'DUDEL',
        {
            bla: {
                dazwischen: {
                    blub: 'DUDEL'
                }
            }
        }
    ],
    [
        {
            bla: {
                hamwaschon: 'ham wa schon'
            }
        },
        'bla.dazwischen.blub',
        'DUDEL',
        {
            bla: {
                dazwischen: {
                    blub: 'DUDEL'
                },
                hamwaschon: 'ham wa schon'
            }
        }
    ],
    [
        {
            bla: {
                hamwaschon: 'ham wa schon'
            }
        },
        'bla.dazwischen.blub',
        'DUDEL',
        {
            bla: {
                dazwischen: {
                    blub: 'DUDEL'
                },
                hamwaschon: 'ham wa schon'
            }
        }
    ]
])(
    'When my object is %j and my path is %s and my value is %j, the result of calling addValueByDottedPath is %j',
    (object, path, value, expected) => expect(addValueByDottedPath(object, path, value)).toEqual(expected)
);
