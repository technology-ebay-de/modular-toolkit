import { branch, renderComponent } from 'recompose';
import { GistsSpinner } from '../components';

export default branch(({ topStories }) => topStories === null, renderComponent(GistsSpinner));
