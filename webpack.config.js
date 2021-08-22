const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  devtool: false,
  plugins: [new webpack.SourceMapDevToolPlugin({})],
};
