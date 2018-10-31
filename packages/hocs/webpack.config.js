module.exports = {
    entry: './index-esnext.js',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        'react-redux': 'react-redux',
        'prop-types': 'prop-types',
        recompose: 'recompose',
        reselect: 'reselect',
        'redux-saga/effects': 'redux-saga/effects'
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
