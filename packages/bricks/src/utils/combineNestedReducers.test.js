import { combineNestedReducers, createFakeActionAndReducer } from '.';
import { createStore } from 'redux';

const [foo, fooAction, fooSpy] = createFakeActionAndReducer('FOO');
const [bar, barAction, barSpy] = createFakeActionAndReducer('BAR');
const [baz, bazAction, bazSpy] = createFakeActionAndReducer('BAZ');
const [bazong, bazongAction, bazongSpy] = createFakeActionAndReducer('BAZONG');

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
        describe('the initial state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
        describe('and I dispatch an action for each of the combined nested reducers', () => {
            beforeEach(() => {
                store.dispatch(fooAction);
                store.dispatch(barAction);
                store.dispatch(bazAction);
                store.dispatch(bazongAction);
            });
            describe('the resulting state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
            describe('the “foo” reducer', () =>
                it('handles the “foo” action only once', () => expect(fooSpy).toHaveBeenCalledTimes(1)));
            describe('the “bar” reducer', () =>
                it('handles the “bar” action only once', () => expect(barSpy).toHaveBeenCalledTimes(1)));
            describe('the “baz” reducer', () =>
                it('handles the “baz” action only once', () => expect(bazSpy).toHaveBeenCalledTimes(1)));
            describe('the “bazong” reducer', () =>
                it('handles the “bazong” action only once', () => expect(bazongSpy).toHaveBeenCalledTimes(1)));
        });
        afterEach(() => jest.clearAllMocks());
    });
});
