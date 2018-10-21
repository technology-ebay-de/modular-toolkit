import { LOAD_GISTS_START, LOAD_GISTS_SUCCESS } from './actions';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case LOAD_GISTS_START:
            return {
                ...state,
                gists: null
            };
        case LOAD_GISTS_SUCCESS:
            return {
                ...state,
                gists: action.gists
            };
        default:
            return state;
    }
};
