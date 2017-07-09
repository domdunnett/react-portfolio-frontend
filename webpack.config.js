const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: path.join('url-loader?', __dirname, '/images/[name].[ext]') },
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.json', '.jsx'],
  },
  plugins: [HtmlWebpackPluginConfig],
};
