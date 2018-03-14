module.exports = {
    entry: './index-esnext.js',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        'react-redux': {
            commonjs2: 'react-redux'
        },
        'prop-types': {
            commonjs2: 'prop-types'
        },
        recompose: {
            commonjs2: 'recompose'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    mode: 'production'
};
