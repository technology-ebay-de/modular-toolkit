import { branch, renderComponent } from 'recompose';
import { HackerNewsSpinner } from '../components';

export default branch(({ topStories }) => topStories === null, renderComponent(HackerNewsSpinner));
