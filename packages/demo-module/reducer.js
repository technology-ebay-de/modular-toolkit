import { LOAD_TOP_STORIES_START, LOAD_TOP_STORIES_FAILURE, LOAD_TOP_STORIES_SUCCESS } from './actions';
export const initialState = {
    isLoading: false,
    hasFailed: false,
    topStories: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_TOP_STORIES_START:
            return {
                ...state,
                topStories: [],
                isLoading: true,
                hasFailed: false
            };
        case LOAD_TOP_STORIES_SUCCESS:
            return {
                ...state,
                topStories: action.topStories,
                isLoading: false,
                hasFailed: false
            };
        case LOAD_TOP_STORIES_FAILURE:
            return {
                ...state,
                topStories: [],
                isLoading: false,
                hasFailed: true
            };

        default:
            return state;
    }
};
