/**
 * Recompose helper function for dispatching actions on `componentWillMount`.
 * Just reduces some boilerplate:
 *
 *   lifecycle({
 *       componentWillMount({ foo }) {
 *           someActionDispatcher(foo);
 *       }
 *   })
 *
 * can now be written as:
 *
 *   bootstrap({ foo } => someActionDispatcher(foo))
 *
 */

import { lifecycle } from 'recompose';

export default fn =>
    lifecycle({
        componentWillMount() {
            fn(this.props);
        }
    });
