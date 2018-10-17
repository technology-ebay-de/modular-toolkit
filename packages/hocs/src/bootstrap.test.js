import bootstrap from './bootstrap';

const mockLifecycle = jest.fn();

jest.mock('recompose', () => ({
    lifecycle: (...args) => mockLifecycle(...args)
}));

describe('When I call the bootstrap function with some callback function', () => {
    beforeEach(() => bootstrap(() => {}));
    describe('the lifecycle method of recompose', () =>
        it('is called', () =>
            expect(mockLifecycle).toBeCalledWith(
                expect.objectContaining({
                    componentDidMount: expect.any(Function)
                })
            )));
});
