import { registerSelectorsForUseWithGlobalState } from '@react-modular-toolkit/selectors';
import * as hackerNewsSelectors from '@react-modular-toolkit/demo-module/selectors';

export default () => registerSelectorsForUseWithGlobalState('modules.hackerNews', hackerNewsSelectors);
