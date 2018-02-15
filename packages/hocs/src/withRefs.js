import { withPropsOnChange } from 'recompose';

export default () => {
    const refs = {};
    const setRef = refName => refElement => (refs[refName] = refElement);
    return withPropsOnChange([], () => ({ refs, setRef }));
};
