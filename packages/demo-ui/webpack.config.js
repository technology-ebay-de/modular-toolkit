module.exports = {
    entry: './index-esnext.js',
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    externals: {
        'prop-types': {
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
            umd: 'prop-types',
            root: 'PropTypes'
        },
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            umd: 'react',
            root: 'React'
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
