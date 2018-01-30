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
                include: [/\/src\//, /\/node_modules\/@react-modular-toolkit\//],
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                include: [/\/src\//, /\/node_modules\/@react-modular-toolkit\//],
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true
                    // localIdentName: '[name]__[local]___[hash:base64:5]'
                }
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
