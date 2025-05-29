/* eslint-disable no-undef */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function webpackRulesConfiguration(isProduction) {
  return [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
    },
    {
      test: /\.module\.css$/,
      use: [
        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        },
      ],
    },
  ];
};
