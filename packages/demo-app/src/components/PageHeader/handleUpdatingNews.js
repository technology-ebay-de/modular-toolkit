import { hackerNewsActions } from '@modular-toolkit/demo-module';

export default ({ dispatch }) => () => dispatch(hackerNewsActions.loadTopStoriesAction.start());
