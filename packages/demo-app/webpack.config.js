module.exports = {
    entry: {
        home: './src/pages/home/index.js',
        'about-me': './src/pages/about-me/index.js',
        'my-blog': './src/pages/my-blog/index.js',
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
