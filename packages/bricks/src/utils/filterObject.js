export default (object, props) => props.reduce((acc, curr) => ({ ...acc, [curr]: object[curr] }), {});
