import BrickManagerContext from './BrickManagerContext';

jest.mock('react', () => ({
    createContext: jest.fn().mockReturnValue('CONTEXT')
}));

describe('The value exported by the BrickManagerContext module', () =>
    it('is the context returned by React.createContext', () => expect(BrickManagerContext).toEqual('CONTEXT')));
