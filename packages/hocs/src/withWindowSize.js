import { compose, withState } from 'recompose';
import callHandlerOnResize from './callHandlerOnResize';

export default (
    options = {
        debounce: 20
    }
) =>
    compose(
        withState('windowSize', 'setWindowSize', { width: 0, height: 0 }),
        callHandlerOnResize('setWindowSize', options)
    );
