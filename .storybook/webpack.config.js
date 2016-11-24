const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const wixNodeBuildConfig = require('wix-node-build/config/webpack.config.storybook');

module.exports = (config, env) => {
  return wixNodeBuildConfig(genDefaultConfig(config, env));
};
