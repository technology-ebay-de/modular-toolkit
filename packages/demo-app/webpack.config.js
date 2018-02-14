module.exports = {
    entry: {
        home: ['babel-polyfill', './src/pages/home/index.js'],
        'about-me': ['babel-polyfill', './src/pages/about-me/index.js'],
        'my-blog': ['babel-polyfill', './src/pages/my-blog/index.js']
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [/\/src\//, /\/node_modules\/@modular-toolkit\//],
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                include: [/\/src\//, /\/node_modules\/@modular-toolkit\//],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js'],
        symlinks: false
    },
    devServer: {
        contentBase: './'
    }
};
