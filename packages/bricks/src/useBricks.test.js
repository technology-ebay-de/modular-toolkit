import useBricks from './useBricks';

const bricks = 'BRICKS';

const mockBrickManager = {
    installBricks: jest.fn()
};

jest.mock('./BrickManagerContext');

jest.mock('react', () => ({
    createContext() {},
    useContext() {
        return mockBrickManager;
    }
}));

describe('When I call the “useBricks” React hook function', () => {
    beforeEach(() => useBricks(bricks));
    describe('the Brick manager from context', () =>
        it('is called with the provided bricks map', () =>
            expect(mockBrickManager.installBricks).toBeCalledWith(bricks)));
});
