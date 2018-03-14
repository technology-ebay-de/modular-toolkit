import { combineReducers } from 'redux';
import { hackerNewsRootReducer } from '@modular-toolkit/demo-module';

export default combineReducers({
    page(state = {}, action = {}) {
        switch (action.type) {
            default:
                return state;
        }
    },
    modules: combineReducers({
        hackerNews: hackerNewsRootReducer
    })
});
