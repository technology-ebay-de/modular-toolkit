export default (path, selector) => {
    if (!path || !path.length) {
        return selector;
    }
    const segments = path.split('.');
    return state => {
        let localState = state;
        segments.forEach(segment => {
            if (!localState.hasOwnProperty(segment)) {
                throw Error(
                    `Invalid state path provided: ${path}, got stuck with '${segment}' ` +
                        `on ${JSON.stringify(localState)} with ${JSON.stringify(state)}.`
                );
            }
            localState = localState[segment];
        });
        return selector(localState);
    };
};
