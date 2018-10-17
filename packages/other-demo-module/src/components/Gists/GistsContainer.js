import { connectSelectors, bootstrap } from '@modular-toolkit/hocs';
import { compose, withHandlers, setDisplayName } from 'recompose';

import { enhanceWithSpinner } from '../../enhancers';
import { handleLoadingGists } from '../../handlers';
import { selectTopStories } from '../../selectors';
import { loadTopStoriesAction } from '../../actions';
import Gists from './Gists';

const enhance = compose(
    setDisplayName('GistsContainer'),
    connectSelectors({
        topStories: selectTopStories
    }),
    bootstrap(({ dispatch, topStories }) => !topStories && dispatch(loadTopStoriesAction.start())),
    withHandlers({ handleLoadingGists }),

    enhanceWithSpinner
);

export default enhance(Gists);
