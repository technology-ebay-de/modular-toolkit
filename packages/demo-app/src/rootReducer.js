import { CHANGE_BACKGROUND_COLOR } from './actions';
import { combineReducers } from 'redux';

export default combineReducers({
    page(state = {}, action = {}) {
        switch (action.type) {
            case CHANGE_BACKGROUND_COLOR:
                return {
                    ...state,
                    backgroundColor: action.backgroundColor
                };
            default:
                return state;
        }
    }
});
