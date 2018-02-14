import { registerSelectorsForUseWithGlobalState } from '@modular-toolkit/selectors';
import * as hackerNewsSelectors from '@modular-toolkit/demo-module/selectors';

export default () => registerSelectorsForUseWithGlobalState('modules.hackerNews', hackerNewsSelectors);
