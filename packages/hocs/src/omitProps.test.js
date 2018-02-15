import omitProps from './omitProps.js';

jest.mock('recompose', () => ({
    mapProps: id => id
}));

describe('When I call the "omitProps" function', () => {
    let result;
    beforeEach(() => (result = omitProps(['test'])({ foo: 'bar', test: 'shouldBeOmitted' })));
    describe('the result', () =>
        it('has omitted the property as expected', () => expect(result).toEqual({ foo: 'bar' })));
});
