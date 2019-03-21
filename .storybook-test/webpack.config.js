const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = (config, env, defaultConfig) => {
  defaultConfig.module.rules[0].use[0].loader = require.resolve('babel-loader');

  const newConfig = wixStorybookConfig(defaultConfig);

  return newConfig;
};
