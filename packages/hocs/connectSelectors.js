/**
 * Helper function for connecting selectors to props.
 * Just reduces some boilerplate:
 *
 *   connect(state => {
 *      foo: getFoo(state),
 *      bar: getBar(state)
 *   })
 *
 * can now be written as:
 *
 *   connectSelectors({
 *     foo: getFoo,
 *     bar: getBar
 *   })
 *
 * And also works with nested states props:
 *
 *   connectSelectors({
 *     car: {
 *        color: getCarColor,
 *        ownerName: getUserName
 *     }
 *   })
 *
 * Will create a prop `car` with the properties `color` and `ownerName`
 *
 */

import { connect } from 'react-redux';
import { makeWorkWithGlobalState } from '@react-modular-toolkit/selectors';

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
