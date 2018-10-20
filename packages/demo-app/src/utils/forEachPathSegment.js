export default (path, callback) => {
    const pathSegments = path.split('.');
    pathSegments.forEach((segment, index) => callback(segment, index === pathSegments.length - 1));
};
