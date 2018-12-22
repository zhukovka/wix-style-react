const union = require('lodash/union');
const StylableWebpackPlugin = require('@stylable/webpack-plugin');
const {
  createCommonWebpackConfig,
  getStyleLoaders,
} = require('yoshi/config/webpack.config');


module.exports = ({config, separateCss, isDebug}) => {
  const styleLoaders = getStyleLoaders({
    embedCss: true,
    isDebug,
    separateCss,
    hmr: false,
    tpaStyle: false,
  });

  const webpackCommonConfig = createCommonWebpackConfig({ isDebug });

  config.resolve.extensions = union(
    config.resolve.extensions,
    webpackCommonConfig.resolve.extensions,
  );

  config.module.rules = [
    ...webpackCommonConfig.module.rules,

    // Rules for Style Sheets
    ...styleLoaders,
  ];

  config.plugins = [...(config.plugins || []), new StylableWebpackPlugin()];

  return config;
};
