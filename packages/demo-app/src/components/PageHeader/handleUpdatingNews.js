import { loadTopStoriesAction } from '@modular-toolkit/demo-module';

export default ({ dispatch }) => () => dispatch(loadTopStoriesAction.start());
