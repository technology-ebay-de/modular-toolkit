import { hackerNewsActions } from '../../hacker-news';

export default ({ dispatch }) => () => dispatch(hackerNewsActions.loadTopStoriesAction.start());
