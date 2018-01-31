import { reducer as hackerNewsReducer } from '@react-modular-toolkit/demo-module';
import { combineReducers } from 'redux';

export default combineReducers({
    page(state = {}, action = {}) {
        switch (action.type) {
            default:
                return state;
        }
    },
    modules: combineReducers({
        hackerNews: hackerNewsReducer
    })
});
