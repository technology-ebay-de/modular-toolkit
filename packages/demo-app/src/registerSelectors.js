import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import { selectors as hackerNewsSelectors } from '@modular-toolkit/demo-module';

export default () => registerSelectorsForUseWithGlobalState('modules.hackerNews', hackerNewsSelectors);
