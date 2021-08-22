const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.js',
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
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ],
  resolve: { extensions: ['*', '.js', '.jsx'] },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.mode = 'development';
    config.devServer = {
      static: path.join(__dirname, 'public'),
      port: 3000,
      proxy: {
        '/api': 'http://localhost:4000',
      },
    };
    config.module.rules.push();
    config.devtool = false;
    config.plugins.push(new webpack.SourceMapDevToolPlugin({}));

    return config;
  }

  if (argv.mode === 'production') {
    config.mode = 'production';
    config.module.rules.push();
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: 'public', to: path.join(__dirname, 'server/public') },
        ],
      })
    );

    //ToDo: enable JS CSS minification, post-css, uglifying

    return config;
  }
};
