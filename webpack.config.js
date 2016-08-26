var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var ejs = require('ejs');
var fs = require('fs');

module.exports = {
  entry: './src/apps/toDolistApp.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  devServer: {
    inline: true,
    port: 3333
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]!postcss!sass')
      },
      {test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"}
    ]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
