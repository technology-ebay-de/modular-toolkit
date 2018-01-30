import isPlainObject from './utils/isPlainObject';

/* eslint-disable no-param-reassign */
export default (path, selectors) => {
    if (isPlainObject(selectors)) {
        Object.keys(selectors).forEach(key => (selectors[key].globalStateContext = { path, key }));
    } else if (selectors) {
        selectors.forEach(selector => (selector.globalStateContext = { path }));
    }
};
