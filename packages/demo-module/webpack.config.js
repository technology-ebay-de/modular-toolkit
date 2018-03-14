module.exports = {
    entry: './index-esnext.js',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        'prop-types': {
            commonjs2: 'prop-types'
        },
        react: {
            commonjs2: 'react'
        },
        recompose: {
            commonjs2: 'recompose'
        },
        'redux-saga': {
            commonjs2: 'redux-saga'
        }
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
