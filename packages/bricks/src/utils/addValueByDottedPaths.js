import { addValueByDottedPath } from '.';

export default (object, paths, value, overwrite = true) =>
    paths.reduce((acc, currPath) => addValueByDottedPath(acc, currPath, value, overwrite), { ...object });
