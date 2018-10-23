export const LOAD_GISTS_START = 'gists/LOAD_GISTS_START';
export const LOAD_GISTS_FAILURE = 'gists/LOAD_GISTS_FAILURE';
export const LOAD_GISTS_SUCCESS = 'gists/LOAD_GISTS_SUCCESS';

export const loadGistsAction = {
    start() {
        return {
            type: LOAD_GISTS_START
        };
    },

    success(gists) {
        return {
            type: LOAD_GISTS_SUCCESS,
            gists
        };
    },

    failure() {
        return {
            type: LOAD_GISTS_FAILURE
        };
    }
};
