import { compose, setDisplayName, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { changeColor } from '../../actions';
import getColors from './getColors';

const enhance = compose(
    setDisplayName('HomePageContainer'),
    connect(),
    withHandlers({
        changeColor: ({ dispatch }) => () => dispatch(changeColor(...getColors()))
    })
);

export default enhance(HomePage);
