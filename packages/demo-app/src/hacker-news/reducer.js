import { LOAD_TOP_STORIES_START, LOAD_TOP_STORIES_SUCCESS } from './actions';

import createInitialState from './createInitialState';

const initialState = createInitialState();

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_TOP_STORIES_START:
            return {
                ...state,
                topStories: null
            };
        case LOAD_TOP_STORIES_SUCCESS:
            return {
                ...state,
                topStories: action.topStories
            };
        default:
            return state;
    }
};
