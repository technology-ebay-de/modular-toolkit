import combineReducers from './combineReducers';

describe('When I combine some reducers', () => {
    let combinedReducer, state;
    beforeEach(() => {
        state = {
            baz: 'baz',
            argh: 'argh'
        };
        return (combinedReducer = combineReducers({
            baz: (s = 'baz', action) => {
                switch (action.type) {
                    case 'BAZ':
                        return 'BAZ!!!';
                    default:
                        return s;
                }
            },
            argh: (s = 'argh', action) => {
                switch (action.type) {
                    case 'ARGH':
                        return 'ARGH!!!';
                    default:
                        return s;
                }
            }
        }));
    });
    describe('and I call the combined reducer with an action for the first reducer', () => {
        let result;
        beforeEach(() => (result = combinedReducer(state, { type: 'BAZ' })));
        describe('the result', () => {
            it('is correct', () => {
                expect(result).toMatchSnapshot();
            });
        });
    });
    describe('and I call the combined reducer with an action for the second reducer', () => {
        let result;
        beforeEach(() => (result = combinedReducer(state, { type: 'ARGH' })));
        describe('the result', () => {
            it('is correct', () => {
                expect(result).toMatchSnapshot();
            });
        });
    });
});
