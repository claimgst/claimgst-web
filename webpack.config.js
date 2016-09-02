var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/public'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [HTMLWebpackPluginConfig],
  watchOptions: {
    poll: 1000 //https://github.com/webpack/webpack-dev-server/issues/143#issuecomment-219147351
  }
}