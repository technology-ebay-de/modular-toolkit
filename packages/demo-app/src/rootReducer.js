import { combineReducers } from 'redux';
// import { reducer as hackerNewsReducer } from '@modular-toolkit/demo-module';

export default combineReducers({
    page(state = {}, action = {}) {
        switch (action.type) {
            default:
                return state;
        }
    }
    // modules: combineReducers({
    //     hackerNews: hackerNewsReducer
    // })
});
