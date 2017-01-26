'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/app'
    ],
    output: {
        path: __dirname,
        filename: 'main.js',
        publicPath: '/assets/'
    },
    cache: true,
    debug: false,
    devtool: false,
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            loaders: ['react-hot', 'babel-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
