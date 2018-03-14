import { compose, withState } from 'recompose';
import { callHandlerOnResize, omitProps } from '../index-esnext';

export default (
    options = {
        debounce: 20
    }
) =>
    compose(
        withState('windowSize', 'setWindowSize', { width: 0, height: 0 }),
        callHandlerOnResize('setWindowSize', options),
        omitProps(['setWindowSize'])
    );
