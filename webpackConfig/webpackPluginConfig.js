/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = function webpackPluginConfig(isProduction) {
  return [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    !isProduction ? new webpack.ProgressPlugin() : undefined,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
};
