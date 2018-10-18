import { CHANGE_BACKGROUND_COLOR } from './actions';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case CHANGE_BACKGROUND_COLOR:
            /* eslint-disable no-console */
            console.log(
                '%c🦄 [PH_LOG]',
                'font-size: 12px; color: white; background-color: hotpink; ' +
                    'border-radius: 8px; padding: 2px 8px 2px 4px',
                'reducer change background color'
            ); // PH_TODO
            /* eslint-enable no-console */
            return {
                ...state,
                page: {
                    ...state.page,
                    backgroundColor: action.backgroundColor
                }
            };
        default:
            return state;
    }
};
