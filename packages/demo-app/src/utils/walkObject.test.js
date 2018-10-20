import walkObject from './walkObject';

describe('When I walk an object', () => {
    let callback;
    beforeEach(() => {
        callback = jest.fn();
        return walkObject(
            {
                argh: {
                    grault: {
                        rapante: 'RAPANTE',
                        fizz: null
                    }
                }
            },
            callback
        );
    });
    describe('the provided callback', () =>
        it('is called correctly', () => expect(callback.mock.calls).toMatchSnapshot()));
});
