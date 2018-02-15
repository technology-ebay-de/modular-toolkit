import { mapProps } from 'recompose';
import omit from 'lodash.omit';

export default keys => mapProps(props => omit(props, keys));
