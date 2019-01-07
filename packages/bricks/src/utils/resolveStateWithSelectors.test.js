import resolveStateWithSelectors from './resolveStateWithSelectors';

const globalState = {
    bar: {
        baz: {
            qux: {
                quux: 'QUUX'
            }
        }
    }
};

const store = {
    getState() {
        return globalState;
    }
};

const selector = s => s.bar.baz.qux;

jest.mock('@modular-toolkit/selectors', () => ({
    makeWorkWithGlobalState: s => s
}));

const localState = {
    foo: 'FOO',
    fasel: {
        bar: selector
    }
};

test('The result of calling resolveStateWithSelectors is correct', () =>
    expect(resolveStateWithSelectors(store, localState)).toMatchSnapshot());
