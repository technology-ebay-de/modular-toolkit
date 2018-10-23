import { CHANGE_COLOR } from './actions';
import { combineReducers } from '@modular-toolkit/bricks';

export default combineReducers({
    page(state = {}, action = {}) {
        switch (action.type) {
            case CHANGE_COLOR:
                return {
                    ...state,
                    color: {
                        background: action.background,
                        header: action.header
                    }
                };
            default:
                return state;
        }
    }
});
