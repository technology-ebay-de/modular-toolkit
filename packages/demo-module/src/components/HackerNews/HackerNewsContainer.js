import { connectSelectors } from '@modular-toolkit/hocs';
import { compose, withHandlers } from 'recompose';

import { enhanceWithSpinner } from '../../enhancers';
import { handleLoadingTopStories } from '../../handlers';
import { selectTopStories } from '../../selectors';
import HackerNews from './HackerNews';

const enhance = compose(
    connectSelectors({
        topStories: selectTopStories
    }),
    withHandlers({ handleLoadingTopStories }),
    enhanceWithSpinner
);

export default enhance(HackerNews);
