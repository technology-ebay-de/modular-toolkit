import { compose, setDisplayName, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withBricks } from '../../utils';
import HomePage from './HomePage';
import { changeBackgroundColor } from '../../actions';

const enhance = compose(
    setDisplayName('HomePageContainer'),
    connect(({ page: { backgroundColor } }) => ({ backgroundColor })),
    withBricks([{ pckg: '@modular-toolkit/demo-module', path: 'modules.hackerNews' }]),
    withHandlers({
        changeBackgroundColor: ({ dispatch }) => () => dispatch(changeBackgroundColor('lime'))
    })
);

export default enhance(HomePage);
