import rebaseSelector from './rebaseSelector';

const state = {
    nested: {
        scope: {
            foo: 'bar'
        }
    }
};

const getLocalFoo = scopedState => scopedState.foo;

describe('When I call the rebaseSelector function', () => {
    it('should return the selector itself, when path to scope is empty', () => {
        const getFoo = rebaseSelector('', getLocalFoo);
        getFoo.should.deep.equal(getLocalFoo);
    });
    it('should return a selector that accesses the local state when providing the global state', () => {
        const getFoo = rebaseSelector('nested.scope', getLocalFoo);
        const result = getFoo(state);
        result.should.equal('bar');
    });
    it('should throw an exception if an invalid path is given', () => {
        let error;
        try {
            const getFoo = rebaseSelector('invalid.scope', getLocalFoo);
            getFoo(state);
        } catch (e) {
            error = e;
        }

        error.message.should.equal(
            "Invalid state path provided: invalid.scope, got stuck with 'invalid' on " +
                '{"nested":{"scope":{"foo":"bar"}}} with {"nested":{"scope":{"foo":"bar"}}}.'
        );
    });
});
