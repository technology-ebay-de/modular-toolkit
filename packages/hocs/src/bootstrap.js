import { lifecycle } from 'recompose';

export default fn =>
    lifecycle({
        componentDidMount() {
            fn(this.props);
        }
    });
