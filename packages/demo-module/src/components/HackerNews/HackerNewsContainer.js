import { connectSelectors } from '@modular-toolkit/hocs';
import { compose, withHandlers, setDisplayName } from 'recompose';

import { enhanceWithSpinner } from '../../enhancers';
import { handleLoadingTopStories } from '../../handlers';
import { selectTopStories } from '../../selectors';
import { loadTopStoriesAction } from '../../actions';
import HackerNews from './HackerNews';

const enhance = compose(
    setDisplayName('HackerNewsContainer'),
    connectSelectors({
        topStories: selectTopStories
    }),
    bootstrap(({ dispatch, topStories }) => !topStories && dispatch(loadTopStoriesAction.start())),
    withHandlers({ handleLoadingTopStories }),

    enhanceWithSpinner
);

export default enhance(HackerNews);
