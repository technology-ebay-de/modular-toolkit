import BrickManager, { loadReducer, saveReducer } from './BrickManager';
import { createStore } from 'redux';

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

let store;
const sagaMiddleware = {
    run() {}
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
    describe('and I add a reducer with a simple store path', () => {
        beforeEach(() => brickManager.addReducer('argh', arghReducer));
        describe('and I dispatch an action for the simple store path reducer', () => {
            beforeEach(() => store.dispatch({ type: 'ARGH' }));
            describe('the Redux state', () => it('is correct', () => expect(store.getState()).toMatchSnapshot()));
        });
    });
    describe('and I add a reducer with a complex store path', () => {
        beforeEach(() => brickManager.addReducer('bricks.fasel', faselReducer));
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
        describe('and I add another reducer with a complex store path', () => {
            beforeEach(() => brickManager.addReducer('bricks.xyzzy', xyzzyReducer));
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
    describe('and I save a reducer (internal function) with a simple path', () => {
        beforeEach(() => brickManager[saveReducer]('fred', 'FRED_REDUCER'));
        describe('the internal property reducers', () => {
            let reducers;
            beforeEach(() => (reducers = brickManager.reducers));
            it('has the correct value', () => expect(reducers).toMatchSnapshot());
        });
    });
    describe('and I save a reducer (internal function) with a complex path', () => {
        beforeEach(() => brickManager[saveReducer]('bar.qux.fred', 'FRED_REDUCER'));
        describe('the internal property reducers', () => {
            let reducers;
            beforeEach(() => (reducers = brickManager.reducers));
            it('has the correct value', () => expect(reducers).toMatchSnapshot());
        });
        describe('and I retrieve the reducer', () => {
            let result;
            beforeEach(() => (result = brickManager[loadReducer]('bar.qux.fred')));
            describe('the result', () => it('is correct', () => expect(result).toEqual('FRED_REDUCER')));
        });
        describe('and I try to retrieve a reducer for the second segment of the path', () => {
            let result;
            beforeEach(() => (result = brickManager[loadReducer]('bar.qux')));
            describe('the result', () => it('is correct', () => expect(result).toEqual({ fred: 'FRED_REDUCER' })));
        });
        describe('and I save another reducer at the first level of the reducers tree', () => {
            beforeEach(() => brickManager[saveReducer]('bar.thud', 'THUD_REDUCER'));
            describe('the internal property reducers', () => {
                let reducers;
                beforeEach(() => (reducers = brickManager.reducers));
                it('has the correct value', () => expect(reducers).toMatchSnapshot());
            });
            describe('and I retrieve the reducer', () => {
                let result;
                beforeEach(() => (result = brickManager[loadReducer]('bar.thud')));
                describe('the result', () => it('is correct', () => expect(result).toEqual('THUD_REDUCER')));
            });
            describe('and I save yet another reducer that overwrites the path of the first one', () => {
                beforeEach(() => brickManager[saveReducer]('bar.qux', 'QUX_REDUCER'));
                describe('the internal property reducers', () => {
                    let reducers;
                    beforeEach(() => (reducers = brickManager.reducers));
                    it('has the correct value', () => expect(reducers).toMatchSnapshot());
                });
                describe('and I retrieve the reducer', () => {
                    let result;
                    beforeEach(() => (result = brickManager[loadReducer]('bar.qux')));
                    describe('the result', () => it('is correct', () => expect(result).toEqual('QUX_REDUCER')));
                });
            });
        });
    });
});
