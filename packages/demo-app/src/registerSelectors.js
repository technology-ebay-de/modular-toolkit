import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import { hackerNewsSelectors } from '@modular-toolkit/demo-module';

export default () => registerSelectorsForUseWithGlobalState('modules.hackerNews', hackerNewsSelectors);
