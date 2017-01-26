module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: './src'
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
    }

}
