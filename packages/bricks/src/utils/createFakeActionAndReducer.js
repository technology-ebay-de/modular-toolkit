/* this is used only in unit tests */
/* global jest */
export default type => {
    const spy = jest.fn();
    const reducer = (state = {}, action = {}) => {
        if (action.type === type) {
            spy(action.value);
            return { ...state, value: action.value };
        }
        return state;
    };
    const action = { type, value: type.toLowerCase() };
    return [reducer, action, spy];
};
