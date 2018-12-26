/* this is used only in unit tests */
export default type => [
    (state = {}, action = {}) => (action.type === type ? { ...state, value: action.value } : state),
    { type, value: type.toLowerCase() }
];
