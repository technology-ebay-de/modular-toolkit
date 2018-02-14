export default (...args) => {
    const createSelector = require('reselect').createSelector;
    return createSelector(...args);
};
