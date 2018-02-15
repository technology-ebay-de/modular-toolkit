import { compose, withContext, withPropsOnChange, shallowEqual } from 'recompose';
import PropTypes from 'prop-types';

export default function provideContext(contextName, contextPropTypes, getChildContext) {
    return compose(
        withPropsOnChange([], () => {
            const subscriptions = new Set();
            const subscribe = callback => {
                subscriptions.add(callback);
                return function unsubscribe() {
                    subscriptions.delete(callback);
                };
            };
            return { subscriptions, subscribe };
        }),
        withContext(
            {
                [contextName]: PropTypes.shape({
                    subscribe: PropTypes.func,
                    data: PropTypes.shape(contextPropTypes)
                })
            },
            props => {
                const childContext = getChildContext(props);
                const { subscribe } = props;
                return {
                    [contextName]: { subscribe, data: childContext }
                };
            }
        ),
        withPropsOnChange(
            (props, nextProps) => {
                const childContext = getChildContext(props);
                const nextChildContext = getChildContext(nextProps);
                return !shallowEqual(childContext, nextChildContext);
            },
            ({ subscriptions }) => {
                subscriptions.forEach(callback => callback());
            }
        )
    );
}
