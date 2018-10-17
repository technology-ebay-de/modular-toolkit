import { createFactory } from 'react';

export default brickSpecs => BaseComponent => {
    for (const { pckg, path } of brickSpecs) {
        // eslint-disable-next-line no-console
        console.log('[PH_LOG] package:', pckg); // PH_TODO
        // eslint-disable-next-line no-console
        console.log('[PH_LOG] path:', path); // PH_TODO
    }
    const factory = createFactory(BaseComponent);
    return props => factory(props);
};
