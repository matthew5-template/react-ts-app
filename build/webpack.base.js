const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // entry: ['react-hot-loader/patch', './src/index.js'],
  entry: ['./src/index.js'],
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, '../dist'), // must be absolute path
    chunkFilename: 'js/[name]_[hash:6].js',
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          'postcss-loader'
        ]
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
