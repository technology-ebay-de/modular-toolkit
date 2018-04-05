import connectSelectors from './connectSelectors';

jest.mock('react-redux', () => ({
    connect: jest.fn(arg => arg)
}));

jest.mock('@modular-toolkit/selectors', () => ({
    makeWorkWithGlobalState: arg => arg
}));

describe('When I call the connectSelectors function with an object', () => {
    let mapStateToProps;
    beforeEach(
        () =>
            (mapStateToProps = connectSelectors({
                foo: () => 'foo result',
                bar: () => 'bar result'
            }))
    );
    it('it returns an object with same keys and values of selector', () =>
        void mapStateToProps().should.deep.equal({
            foo: 'foo result',
            bar: 'bar result'
        }));
});
describe('When I call the connectSelectors function with an object with nested structure', () => {
    let mapStateToProps;
    beforeEach(
        () =>
            (mapStateToProps = connectSelectors({
                foo: () => 'foo result',
                bar: {
                    baz: () => 'baz result',
                    ban: () => 'ban result'
                }
            }))
    );
    it('it returns an object with same keys and values of selector', () =>
        void mapStateToProps().should.deep.equal({
            foo: 'foo result',
            bar: {
                baz: 'baz result',
                ban: 'ban result'
            }
        }));
});
