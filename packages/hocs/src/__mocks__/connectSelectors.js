/**
 * This mock assumes you are calling it with mocked selectors, therefore it does not use
 * `makeWorkWithGlobalState` but calls selectors directly
 */

import { connect } from 'react-redux';
const makeWorkWithGlobalState = selector => selector;

export default selectorMap => connect(state => mapSelectors(selectorMap, state));

function mapSelectors(selectorMap, state) {
    return Object.keys(selectorMap).reduce(
        (result, key) => ({
            ...result,
            ...{
                [key]:
                    typeof selectorMap[key] === 'object'
                        ? mapSelectors(selectorMap[key], state)
                        : makeWorkWithGlobalState(selectorMap[key])(state)
            }
        }),
        {}
    );
}
