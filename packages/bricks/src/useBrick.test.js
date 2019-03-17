import useBrick from './useBrick';

const storePath = 'STORE-PATH';
const brick = 'BRICK';

const mockBrickManager = {
    installBrick: jest.fn()
};

jest.mock('./BrickManagerContext');

jest.mock('react', () => ({
    createContext() {},
    useContext() {
        return mockBrickManager;
    }
}));

describe('When I call the “useBrick” React hook function', () => {
    beforeEach(() => useBrick(storePath, brick));
    describe('the Brick manager from context', () =>
        void it('is called with the provided store path and brick module', () =>
            expect(mockBrickManager.installBrick).toBeCalledWith(storePath, brick)));
});
