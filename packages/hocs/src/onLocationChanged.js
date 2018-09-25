import { lifecycle } from 'recompose';

function locationHasChanged(
    { location: { pathname: prevPathname, search: prevSearch } },
    { location: { pathname: currPathname, search: currSearch } }
) {
    return `${prevPathname}${prevSearch}` !== `${currPathname}${currSearch}`;
}

export default (callback, includeInitialRender = false) => {
    let isInitialRender = true;
    return lifecycle({
        componentDidMount() {
            if (includeInitialRender && isInitialRender) {
                callback(this.props);
                isInitialRender = false;
            }
        },
        componentDidUpdate(prevProps) {
            if (locationHasChanged(prevProps, this.props)) {
                callback(this.props);
            }
        }
    });
};
