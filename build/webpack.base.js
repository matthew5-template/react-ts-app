const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, '../dist'), // must be absolute path
    // chunkFilename: 'js/[name].js',
    publicPath: '/' // filename prefix path => js/main.js
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
