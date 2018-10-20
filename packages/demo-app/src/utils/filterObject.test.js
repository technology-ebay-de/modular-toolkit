import filterObject from './filterObject';

// prettier-ignore
const testCases = [
    [
        { foo: 'FOO', bar: 'BAR' },
        [],
        {}
    ],
    [
        { foo: 'FOO', bar: 'BAR' },
        ['foo'],
        { foo: 'FOO' }
    ],
    [
        { foo: 'FOO', bar: 'BAR' },
        ['foo', 'bar'],
        { foo: 'FOO', bar: 'BAR' }
    ]
];

test.each(testCases)('Given object %j and props %j, filterObject returns %j', (object, props, expected) =>
    expect(filterObject(object, props)).toEqual(expected)
);
