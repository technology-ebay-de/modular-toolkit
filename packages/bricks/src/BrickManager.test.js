import BrickManager, { addReducer } from './BrickManager';
import { createStore } from 'redux';
import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';

const selectors = 'SELECTORS';
const otherSelectors = 'OHTER_SELECTORS';
const saga = 'SAGA';
const otherSaga = 'OTHER_SAGA';

jest.mock('@modular-toolkit/selectors', () => ({
    registerSelectorsForUseWithGlobalState: jest.fn()
}));

const reducer = (state = {}, { type }) => {
    switch (type) {
        case 'THUD':
            return {
                ...state,
                thud: 'THUD'
            };
        default:
            return state;
    }
};

const otherReducer = s => s;

let store;

const sagaMiddleware = {
    run: jest.fn()
};

function arghReducer(state = {}, { type }) {
    switch (type) {
        case 'ARGH':
            return { ...state, argh: 'ARGH' };
        default:
            return state;
    }
}

function faselReducer(state = {}, { type }) {
    switch (type) {
        case 'FASEL':
            return { ...state, basel: 'BASEL' };
        case 'COOKIE':
            return { ...state, basel: 'COOKIE' };
        default:
            return state;
    }
}

function xyzzyReducer(state = {}, { type, payload }) {
    switch (type) {
        case 'XYZZY':
            return { ...state, payload };
        default:
            return state;
    }
}

describe('When I create a brick manager', () => {
    let brickManager;
    beforeEach(() => {
        store = createStore(reducer);
        return (brickManager = new BrickManager({ store, reducer, sagaMiddleware }));
    });
    describe('and I install a Brick', () => {
        beforeEach(() => brickManager.installBrick('bricks.fasel', { reducer, saga, selectors }));
        describe('the selectors', () =>
            it('are registered for use with global state', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledWith('bricks.fasel', selectors)));
        describe('the saga', () => it('is run', () => expect(sagaMiddleware.run).toHaveBeenCalledWith(saga)));
        describe('the reducer', () => it('is stored', () => expect(brickManager.reducers).toMatchSnapshot()));
    });
    describe('and I install two Bricks', () => {
        beforeEach(() =>
            brickManager.installBricks({
                'bricks.fasel': { reducer, saga, selectors },
                'bricks.xyzzy': { reducer: otherReducer, saga: otherSaga, selectors: otherSelectors }
            })
        );
        describe('the selectors of the first brick', () =>
            it('are registered for use with global state', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledWith('bricks.fasel', selectors)));
        describe('the reducers of both bricks', () =>
            it('are stored', () => expect(brickManager.reducers).toMatchSnapshot()));
        describe('the saga of the first brick', () =>
            it('is run', () => expect(sagaMiddleware.run).toHaveBeenCalledWith(saga)));
        describe('the selectors of the second brick', () =>
            it('are registered for use with global state', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledWith('bricks.xyzzy', otherSelectors)));
        describe('the saga of the second brick', () =>
            it('is run', () => expect(sagaMiddleware.run).toHaveBeenCalledWith(otherSaga)));
    });
    describe('and I install a brick with a reducer with a simple store path', () => {
        beforeEach(() => brickManager.installBrick('argh', { reducer: arghReducer, saga, selectors }));
        describe('and I dispatch an action for the simple store path reducer', () => {
            beforeEach(() => store.dispatch({ type: 'ARGH' }));
            describe('the Redux state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
        });
    });
    describe('and I install a brick with a reducer with a complex store path', () => {
        beforeEach(() => brickManager.installBrick('bricks.fasel', { reducer: faselReducer, saga, selectors }));
        describe('and I dispatch and action for the root reducer', () => {
            beforeEach(() => store.dispatch({ type: 'THUD' }));
            describe('the Redux state', () => {
                let state;
                beforeEach(() => (state = store.getState()));
                it('is correct', () => expect(state).toMatchSnapshot());
            });
        });
        describe('and I dispatch an action for the complex store path reducer', () => {
            beforeEach(() => store.dispatch({ type: 'FASEL' }));
            describe('the Redux state', () => {
                let state;
                beforeEach(() => (state = store.getState()));
                it('has a root property that corresponds to the first segment of the complex store path', () => {
                    expect(state).toHaveProperty('bricks');
                });
                it('is correct', () => expect(state).toMatchSnapshot());
            });
            describe('and I dispatch a different action', () => {
                beforeEach(() => store.dispatch({ type: 'COOKIE' }));
                describe('the Redux state', () => {
                    let state;
                    beforeEach(() => (state = store.getState()));
                    it('is correct', () => expect(state).toMatchSnapshot());
                });
            });
            describe('and I dispatch and action for the root reducer', () => {
                beforeEach(() => store.dispatch({ type: 'THUD' }));
                describe('the Redux state', () => {
                    let state;
                    beforeEach(() => (state = store.getState()));
                    it('is correct', () => expect(state).toMatchSnapshot());
                });
            });
        });
        describe('and I install another brick with a reducer with a complex store path', () => {
            beforeEach(() => brickManager.installBrick('bricks.xyzzy', { reducer: xyzzyReducer, saga, selectors }));
            describe('and I dispatch an action for the first reducer I added', () => {
                beforeEach(() => store.dispatch({ type: 'FASEL' }));
                describe('the Redux state', () => {
                    let state;
                    beforeEach(() => (state = store.getState()));
                    it('is correct', () => expect(state).toMatchSnapshot());
                });
            });
            describe('and I dispatch an action for the second reducer I added', () => {
                beforeEach(() => store.dispatch({ type: 'XYZZY', payload: "hey ho let's go!" }));
                describe('the Redux state', () => {
                    let state;
                    beforeEach(() => (state = store.getState()));
                    it('is correct', () => expect(state).toMatchSnapshot());
                });
            });
        });
    });
    describe('and I try to install the same Brick twice', () => {
        let addReducerSpy;
        beforeEach(() => {
            addReducerSpy = jest.spyOn(brickManager, addReducer);
            brickManager.installBrick('bricks.gnarg', { reducer, saga, selectors });
            brickManager.installBrick('bricks.gnarg', { reducer, saga, selectors });
        });
        describe('the selectors', () =>
            it('are registered for use with global state only once', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledTimes(1)));
        describe('the saga', () => it('is run only once', () => expect(sagaMiddleware.run).toHaveBeenCalledTimes(1)));
        describe('the reducer', () => it('is stored only once', () => expect(addReducerSpy).toHaveBeenCalledTimes(1)));
    });
    afterEach(() => jest.clearAllMocks());
});
