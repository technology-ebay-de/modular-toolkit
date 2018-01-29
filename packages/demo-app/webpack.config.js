module.exports = {
    entry: {
        home: './src/pages/home/index.js',
        'about-me': './src/pages/about-me/index.js',
        'my-blog': './src/pages/my-blog/index.js'
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
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
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
        extensions: ['*', '.js', '.js']
    },
    devServer: {
        contentBase: './'
    }
};
