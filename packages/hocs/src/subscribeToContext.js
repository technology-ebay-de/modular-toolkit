import PropTypes from 'prop-types';
import { compose, getContext, lifecycle, withPropsOnChange } from 'recompose';
import omitProps from './omitProps';

export default (contextName, contextPropTypes) =>
    compose(
        getContext({
            [contextName]: PropTypes.shape({
                subscribe: PropTypes.func,
                data: PropTypes.shape(contextPropTypes)
            })
        }),
        lifecycle({
            componentWillMount() {
                const context = this.props[contextName];
                this.unsubscribeFromSlidableContext = context.subscribe(() => this.forceUpdate());
            },
            componentWillUnmount() {
                this.unsubscribeFromSlidableContext();
            }
        }),
        withPropsOnChange([contextName], props => ({ ...props[contextName].data })),
        omitProps([contextName])
    );
