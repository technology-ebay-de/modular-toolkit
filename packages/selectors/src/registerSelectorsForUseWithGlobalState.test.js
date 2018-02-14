import registerSelectorsForUseWithGlobalState from './registerSelectorsForUseWithGlobalState';

describe('When I call the function', () => {
    describe('with an object', () => {
        let selectors;
        beforeAll(() => {
            selectors = {
                foo: () => {}
            };
            registerSelectorsForUseWithGlobalState('some.path', selectors);
        });
        it('should should add globalStateContext to each selector', () => {
            selectors.foo.globalStateContext.path.should.equal('some.path');
        });
    });
    describe('with an array', () => {
        let selectors;
        beforeAll(() => {
            selectors = [{ foo: () => ({}) }];
            registerSelectorsForUseWithGlobalState('some.path', selectors);
        });
        it('should should add globalStateContext to each selector', () => {
            selectors[0].globalStateContext.path.should.equal('some.path');
        });
    });
});
