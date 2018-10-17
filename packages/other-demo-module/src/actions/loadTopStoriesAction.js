export const LOAD_TOP_STORIES_START = 'gists/LOAD_TOP_STORIES_START';
export const LOAD_TOP_STORIES_FAILURE = 'gists/LOAD_TOP_STORIES_FAILURE';
export const LOAD_TOP_STORIES_SUCCESS = 'gists/LOAD_TOP_STORIES_SUCCESS';

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
