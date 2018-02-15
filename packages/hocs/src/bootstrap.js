import { lifecycle } from 'recompose';

export default fn =>
    lifecycle({
        componentWillMount() {
            fn(this.props);
        }
    });
