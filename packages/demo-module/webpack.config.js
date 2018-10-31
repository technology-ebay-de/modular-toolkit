module.exports = {
    entry: './index-esnext.js',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        'prop-types': 'prop-types',
        react: 'react',
        recompose: 'recompose',
        'redux-saga/effects': 'redux-saga/effects',
        reselect: 'reselect'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    mode: 'production'
};
