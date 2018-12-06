import { createStore } from 'redux';
import { mergeReducers, createFakeActionAndReducer } from '.';
import combineReducers from '../combineReducers';

const [foo, fooAction] = createFakeActionAndReducer('FOO');
const [bar, barAction] = createFakeActionAndReducer('BAR');
const [baz, bazAction] = createFakeActionAndReducer('BAZ');
const [bazong, bazongAction] = createFakeActionAndReducer('BAZONG');

describe('When my original reducer is a simple function', () => {
    let originalReducer;
    beforeEach(() => (originalReducer = foo));
    describe('and I create a store', () => {
        let store;
        beforeEach(() => (store = createStore(originalReducer)));
        describe('the initial state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
        describe('and my additional reducers map contains just one reducer', () => {
            let additionalReducers;
            beforeEach(() => (additionalReducers = { bar }));
            describe('and I merge original and additional reducers', () => {
                let mergedReducer;
                beforeEach(() => (mergedReducer = mergeReducers(originalReducer, additionalReducers)));
                describe("and I replace the store's reducer with the merged reducer", () => {
                    beforeEach(() => store.replaceReducer(mergedReducer));
                    describe('the new state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    describe('and I dispatch an action for the original reducer', () => {
                        beforeEach(() => store.dispatch(fooAction));
                        describe('the resulting state', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the additional reducer', () => {
                        beforeEach(() => store.dispatch(barAction));
                        describe('the result', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                });
            });
        });
        describe('and my additional reducers map contains two reducers', () => {
            let additionalReducers;
            beforeEach(() => (additionalReducers = { bar, baz }));
            describe('and I merge original and additional reducers', () => {
                let mergedReducer;
                beforeEach(() => (mergedReducer = mergeReducers(originalReducer, additionalReducers)));
                describe("and I replace the store's reducer with the merged reducer", () => {
                    beforeEach(() => store.replaceReducer(mergedReducer));
                    describe('the new state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    describe('and I dispatch an action for the original reducer', () => {
                        beforeEach(() => store.dispatch(fooAction));
                        describe('the resulting state', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the first additional reducer', () => {
                        beforeEach(() => store.dispatch(barAction));
                        describe('the result', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the second additional reducer', () => {
                        beforeEach(() => store.dispatch(bazAction));
                        describe('the result', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                });
            });
        });
        describe('and my additional reducers map contains two nested reducers', () => {
            let additionalReducers;
            beforeEach(() => (additionalReducers = { bar, corge: { baz } }));
            describe('and I merge original and additional reducers', () => {
                let mergedReducer;
                beforeEach(() => (mergedReducer = mergeReducers(originalReducer, additionalReducers)));
                describe("and I replace the store's reducer with the merged reducer", () => {
                    beforeEach(() => store.replaceReducer(mergedReducer));
                    describe('the new state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    describe('and I dispatch an action for the original reducer', () => {
                        beforeEach(() => store.dispatch(fooAction));
                        describe('the resulting state', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the top additional reducer', () => {
                        beforeEach(() => store.dispatch(barAction));
                        describe('the result', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the nested additional reducer', () => {
                        beforeEach(() => store.dispatch(bazAction));
                        describe('the result', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                });
            });
        });
    });
});

describe('When my original reducer is a combined reducer', () => {
    let originalReducer;
    beforeEach(() => (originalReducer = combineReducers({ foo, bazong })));
    describe('and I create a store', () => {
        let store;
        beforeEach(() => (store = createStore(originalReducer)));
        describe('the initial state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
        describe('and my additional reducers map contains two nested reducers', () => {
            let additionalReducers;
            beforeEach(() => (additionalReducers = { bar, corge: { baz } }));
            describe('and I merge original and additional reducers', () => {
                let mergedReducer;
                beforeEach(() => (mergedReducer = mergeReducers(originalReducer, additionalReducers)));
                describe("and I replace the store's reducer with the merged reducer", () => {
                    beforeEach(() => store.replaceReducer(mergedReducer));
                    describe('the new state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    describe('and I dispatch an action for the first reducer of the combined original reducer', () => {
                        beforeEach(() => store.dispatch(fooAction));
                        describe('the resulting state', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the other reducer of the combined original reducer', () => {
                        beforeEach(() => store.dispatch(bazongAction));
                        describe('the resulting state', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the top additional reducer', () => {
                        beforeEach(() => store.dispatch(barAction));
                        describe('the result', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                    describe('and I dispatch an action for the nested additional reducer', () => {
                        beforeEach(() => store.dispatch(bazAction));
                        describe('the result', () =>
                            it('is correct', () => expect(store.getState()).toMatchSnapshot()));
                    });
                });
            });
        });
    });
});
