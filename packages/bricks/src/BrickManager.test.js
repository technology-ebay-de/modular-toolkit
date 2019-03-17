import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import { createStore } from 'redux';
import BrickManager from './BrickManager';

const selectors = 'SELECTORS';
const otherSelectors = 'OTHER_SELECTORS';
const saga = 'SAGA';
const otherSaga = 'OTHER_SAGA';

jest.mock('@modular-toolkit/selectors', () => ({
    registerSelectorsForUseWithGlobalState: jest.fn(),
    makeWorkWithGlobalState: s => s
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

const otherReducer = (s = {}) => s;

let store;

const globalState = {
    shizzle: {
        fizzle: 'FIZZLE'
    }
};

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

function selectFizzle(state) {
    return state.shizzle.fizzle;
}

describe('When I create a brick manager', () => {
    let brickManager;
    beforeEach(() => {
        store = createStore(reducer, globalState);
        return (brickManager = new BrickManager({ store, reducer, sagaMiddleware }));
    });
    describe('and I install a Brick', () => {
        beforeEach(() => brickManager.installBrick('bricks.fasel', { reducer, saga, selectors }));
        describe('the selectors', () =>
            void it('are registered for use with global state', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledWith('bricks.fasel', selectors)));
        describe('the saga', () => void it('is run', () => expect(sagaMiddleware.run).toHaveBeenCalledWith(saga)));
        describe('the reducer', () =>
            void it('is stored', () => expect(brickManager.additionalReducers).toMatchSnapshot()));
    });
    describe('and I install two Bricks', () => {
        beforeEach(() =>
            brickManager.installBricks({
                'bricks.fasel': { reducer, saga, selectors },
                'bricks.xyzzy': { reducer: otherReducer, saga: otherSaga, selectors: otherSelectors }
            }));
        describe('the selectors of the first brick', () =>
            void it('are registered for use with global state', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledWith('bricks.fasel', selectors)));
        describe('the reducers of both bricks', () =>
            void it('are stored', () => expect(brickManager.additionalReducers).toMatchSnapshot()));
        describe('the saga of the first brick', () =>
            void it('is run', () => expect(sagaMiddleware.run).toHaveBeenCalledWith(saga)));
        describe('the selectors of the second brick', () =>
            void it('are registered for use with global state', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledWith('bricks.xyzzy', otherSelectors)));
        describe('the saga of the second brick', () =>
            void it('is run', () => expect(sagaMiddleware.run).toHaveBeenCalledWith(otherSaga)));
    });
    describe('and I install a brick with a reducer with a simple store path', () => {
        describe('without initial state', () => {
            beforeEach(() => brickManager.installBrick('argh', { reducer: arghReducer, saga, selectors }));
            describe('and I dispatch an action for the simple store path reducer', () => {
                beforeEach(() => store.dispatch({ type: 'ARGH' }));
                describe('the Redux state', () =>
                    void it('is correct', () => expect(store.getState()).toMatchSnapshot()));
            });
        });
        describe('and a simple initial state', () => {
            beforeEach(() =>
                brickManager.installBrick(
                    'argh',
                    { reducer: arghReducer, saga, selectors },
                    {
                        blubber: 'subber'
                    }
                ));
            describe('and I dispatch an action for the simple store path reducer', () => {
                beforeEach(() => store.dispatch({ type: 'ARGH' }));
                describe('the Redux state', () =>
                    void it('is correct', () => expect(store.getState()).toMatchSnapshot()));
            });
        });
        describe('and an initial state with a selector', () => {
            beforeEach(() =>
                brickManager.installBrick(
                    'argh',
                    { reducer: arghReducer, saga, selectors },
                    {
                        fizzle: selectFizzle
                    }
                ));
            describe('and I dispatch an action for the simple store path reducer', () => {
                beforeEach(() => store.dispatch({ type: 'ARGH' }));
                describe('the Redux state', () =>
                    void it('is correct', () => expect(store.getState()).toMatchSnapshot()));
            });
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
        let replaceReducerSpy;
        beforeEach(() => {
            replaceReducerSpy = jest.spyOn(brickManager, 'replaceReducer');
            brickManager.installBrick('bricks.gnarg', { reducer, saga, selectors });
            brickManager.installBrick('bricks.gnarg', { reducer, saga, selectors });
        });
        describe('the selectors', () =>
            void it('are registered for use with global state only once', () =>
                expect(registerSelectorsForUseWithGlobalState).toHaveBeenCalledTimes(1)));
        describe('the saga', () =>
            void it('is run only once', () => expect(sagaMiddleware.run).toHaveBeenCalledTimes(1)));
        describe('the reducer', () =>
            void it('is stored only once', () => expect(replaceReducerSpy).toHaveBeenCalledTimes(1)));
    });
    afterEach(() => jest.clearAllMocks());
});
