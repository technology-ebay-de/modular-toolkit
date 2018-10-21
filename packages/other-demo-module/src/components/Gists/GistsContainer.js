import { connectSelectors, bootstrap } from '@modular-toolkit/hocs';
import { compose, withHandlers, setDisplayName } from 'recompose';

import { enhanceWithSpinner } from '../../enhancers';
import { handleLoadingGists } from '../../handlers';
import { selectGists } from '../../selectors';
import { loadGistsAction } from '../../actions';
import Gists from './Gists';

const enhance = compose(
    setDisplayName('GistsContainer'),
    connectSelectors({
        topStories: selectGists
    }),
    bootstrap(({ dispatch, topStories }) => !topStories && dispatch(loadGistsAction.start())),
    withHandlers({ handleLoadingGists }),

    enhanceWithSpinner
);

export default enhance(Gists);
