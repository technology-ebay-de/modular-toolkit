export const LOAD_TOP_STORIES_START = '@react-modular-toolkit/demo-module/LOAD_TOP_STORIES_START';
export const LOAD_TOP_STORIES_FAILURE = '@react-modular-toolkit/demo-module/LOAD_TOP_STORIES_FAILURE';
export const LOAD_TOP_STORIES_SUCCESS = '@react-modular-toolkit/demo-module/LOAD_TOP_STORIES_SUCCESS';

export const loadTopStoriesAction = {
    start() {
        return {
            type: LOAD_TOP_STORIES_START
        };
    },

    success(topStories) {
        return {
            type: LOAD_TOP_STORIES_SUCCESS,
            topStories
        };
    },

    failure() {
        return {
            type: LOAD_TOP_STORIES_FAILURE
        };
    }
};
