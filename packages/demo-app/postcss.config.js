const cssVariables = require('./src/theme');

module.exports = {
    plugins: [
        require('postcss-cssnext')({
            features: {
                customProperties: {
                    variables: cssVariables
                }
            }
        })
    ]
};
