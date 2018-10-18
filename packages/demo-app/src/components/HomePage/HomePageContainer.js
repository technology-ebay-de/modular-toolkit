import { compose, setDisplayName, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withBricks } from '../../utils';
import HomePage from './HomePage';
import { changeBackgroundColor } from '../../actions';

const enhance = compose(
    setDisplayName('HomePageContainer'),
    connect(state => {
        const { page: { backgroundColor } } = state;
        /* eslint-disable no-console */
        console.log(
            '%c🦄 [PH_LOG]',
            'font-size: 12px; color: white; background-color: purple; border-radius: 8px; padding: 2px 8px 2px 4px',
            `background color: ${backgroundColor}`
        ); // PH_TODO
        console.log('[PH_LOG] state', state); // PH_TODO
        /* eslint-enable no-console */
        return { backgroundColor };
    }),
    withBricks([{ pckg: '@modular-toolkit/demo-module', path: 'modules.hackerNews' }]),
    withHandlers({
        changeBackgroundColor: ({ dispatch }) => () => {
            /* eslint-disable no-console */
            console.log(
                '%c🦄 [PH_LOG]',
                'font-size: 12px; color: white; background-color: lime; ' +
                    'border-radius: 8px; padding: 2px 8px 2px 4px',
                'change background color handler'
            ); // PH_TODO
            /* eslint-enable no-console */
            return dispatch(changeBackgroundColor('lime'));
        }
    })
);

export default enhance(HomePage);
