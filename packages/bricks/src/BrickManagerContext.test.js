import BrickManagerContext from './BrickManagerContext';

jest.mock('react', () => ({
    createContext: jest.fn().mockReturnValue('CONTEXT')
}));

describe('The value exported by the BrickManagerContext module', () =>
    void it('is the context returned by React.createContext', () => expect(BrickManagerContext).toEqual('CONTEXT')));
