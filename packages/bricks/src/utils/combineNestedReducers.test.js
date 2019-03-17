import { combineNestedReducers, createFakeActionAndReducer } from '.';
import { createStore } from 'redux';

const [foo, fooAction] = createFakeActionAndReducer('FOO');
const [bar, barAction] = createFakeActionAndReducer('BAR');
const [baz, bazAction] = createFakeActionAndReducer('BAZ');
const [bazong, bazongAction] = createFakeActionAndReducer('BAZONG');

describe('When I combine some nested reducers', () => {
    let reducer;
    beforeEach(() => {
        reducer = combineNestedReducers({
            foo,
            corge: { bar, xyzzy: { baz, bazong } }
        });
    });
    describe('and I create a store with the combined reducers', () => {
        let store;
        beforeEach(() => (store = createStore(reducer)));
        describe('the initial state', () => void it('is correct', () => expect(store.getState()).toMatchSnapshot()));
        describe('and I dispatch an action for each of the combined nested reducers', () => {
            beforeEach(() => {
                store.dispatch(fooAction);
                store.dispatch(barAction);
                store.dispatch(bazAction);
                store.dispatch(bazongAction);
            });
            describe('the resulting state', () =>
                void it('is correct', () => expect(store.getState()).toMatchSnapshot()));
        });
    });
});
