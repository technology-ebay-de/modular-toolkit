import { compose, setDisplayName } from 'recompose';
import { withBricks } from '../../utils';
import HomePage from './HomePage';

const enhance = compose(
    setDisplayName('HomePageContainer'),
    withBricks([{ pckg: '@modular-toolkit/demo-module', path: 'modules.hackerNews' }])
);

export default enhance(HomePage);
