import { compose, setDisplayName } from 'recompose';
import HackerNews from './HackerNews';
import { selectHasFailed, selectIsLoading, selectTopStories } from '../selectors';
import { connectSelectors } from '@react-modular-toolkit/selectors';

const enhance = compose(
    setDisplayName('HackerNews'),
    connectSelectors({
        hasFailed: selectHasFailed,
        isLoading: selectIsLoading,
        topStories: selectTopStories
    })
);

export default enhance(HackerNews);
