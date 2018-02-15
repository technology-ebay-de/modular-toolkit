import { compose, withState, withPropsOnChange } from 'recompose';

export default function withUpdatableState(stateName, stateSetterName, stateUpdaterName, initialState) {
    return compose(
        withState(stateName, stateSetterName, initialState),
        withPropsOnChange([stateName], props => {
            const state = props[stateName];
            const setState = props[stateSetterName];
            return {
                [stateUpdaterName]: (statePatch, callback) => setState({ ...state, ...statePatch }, callback)
            };
        })
    );
}
