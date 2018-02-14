import { compose, setDisplayName, withHandlers } from 'recompose';
import HackerNews from './HackerNews';
import { selectHasFailed, selectIsLoading, selectTopStories } from '../selectors';
import { connectSelectors } from '@modular-toolkit/hocs';
import { bootstrap } from '@modular-toolkit/hocs';
import { handleLoadingTopStories } from '../handlers';

const enhance = compose(
    setDisplayName('HackerNews'),
    connectSelectors({
        hasFailed: selectHasFailed,
        isLoading: selectIsLoading,
        topStories: selectTopStories
    }),
    withHandlers({
        handleLoadingTopStories
    }),
    bootstrap(({ handleLoadingTopStories: loadTopStories }) => loadTopStories())
);

export default enhance(HackerNews);
