import { lifecycle } from 'recompose';

export default callback =>
    lifecycle({
        componentWillReceiveProps(nextProps) {
            const { location } = this.props;
            const { location: nextLocation } = nextProps;
            const locationHasChanged =
                !location ||
                `${nextLocation.pathname}${nextLocation.search}` !== `${location.pathname}${location.search}`;

            if (locationHasChanged) {
                callback(nextProps);
            }
        }
    });
