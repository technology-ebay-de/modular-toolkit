import { loadGistsAction } from '../actions';

export default ({ dispatch }) => () => dispatch(loadGistsAction.start());
