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
        it('should should add globalStateContext to each selector', () =>
            expect(selectors.foo.globalStateContext.path).toEqual('some.path'));
    });
    describe('with an array', () => {
        let selectors;
        beforeAll(() => {
            selectors = [{ foo: () => ({}) }];
            registerSelectorsForUseWithGlobalState('some.path', selectors);
        });
        it('should should add globalStateContext to each selector', () =>
            expect(selectors[0].globalStateContext.path).toEqual('some.path'));
    });
});
