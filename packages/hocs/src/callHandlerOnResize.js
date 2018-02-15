import { compose, lifecycle, withHandlers } from 'recompose';
import debounce from 'lodash.debounce';

export default (
    handlerName,
    options = {
        debounce: 20
    }
) =>
    compose(
        withHandlers({
            onResizeHandler: props =>
                debounce(() => {
                    const handler = props[handlerName];
                    handler({ width: window.innerWidth, height: window.innerHeight });
                }, options.debounce)
        }),
        lifecycle({
            componentDidMount() {
                const { onResizeHandler } = this.props;
                window.addEventListener('resize', onResizeHandler);
                onResizeHandler();
            },
            componentWillUnmount() {
                const { onResizeHandler } = this.props;
                window.removeEventListener('resize', onResizeHandler);
            }
        })
    );
