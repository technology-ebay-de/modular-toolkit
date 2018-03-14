import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import { hackerNewsSelectors } from './hacker-news';

export default () => registerSelectorsForUseWithGlobalState('modules.hackerNews', hackerNewsSelectors);
