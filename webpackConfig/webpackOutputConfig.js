/* eslint-disable no-undef */

const path = require('path');
module.exports = function webpackOutputConfig() {
  return {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  };
};
