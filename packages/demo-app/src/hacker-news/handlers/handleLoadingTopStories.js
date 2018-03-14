import { loadTopStoriesAction } from '../actions';

export default ({ dispatch }) => () => dispatch(loadTopStoriesAction.start());
