/* eslint-disable no-undef */
const webpackDevServerConfuguration = require('./webpackConfig/webpackDevServerConfuguration');
const webpackRulesConfiguration = require('./webpackConfig/webpackRulesConfiguration');
const webpackPluginConfig = require('./webpackConfig/webpackPluginConfig');
const webpackResolveConfig = require('./webpackConfig/webpackResolveConfig');
const webpackOutputConfig = require('./webpackConfig/webpackOutputConfig');

module.exports = (env = {}) => {
  const isProduction = env.production || process.env.NODE_ENV === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: webpackOutputConfig(),
    plugins: webpackPluginConfig(isProduction),
    module: {
      rules: webpackRulesConfiguration(isProduction),
    },
    resolve: {
      extensions: webpackResolveConfig(),
    },
    devtool: !isProduction ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: !isProduction ? webpackDevServerConfuguration() : undefined,
  };
};
