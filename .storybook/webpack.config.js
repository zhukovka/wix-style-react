const merge = require("lodash/merge");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');
const wixStorybookConfig = require('./yoshi.webpack.config.storybook');

const separateCss = true;
const isDebug = true;

console.log('webpack.config 1******************')
module.exports = (config, env, defaultConfig) => {
  console.log('webpack.config 2******************')
  const baseStorybookConfig = wixStorybookConfig({config: defaultConfig, separateCss, isDebug});
  
  
  const newConfig = merge(baseStorybookConfig, {
    context: path.resolve(__dirname, "..", "src"),
    resolve: {
      alias: {
        "wix-style-react": path.resolve(__dirname, "..", "src")
      }
    },
    module: {
      rules: baseStorybookConfig.module.rules.concat({
        test: /\.story\.js$/,
        loader: "wix-storybook-utils/loader",
        options: {
          storyConfig: {
            moduleName: "wix-style-react",
            repoBaseURL:
              "https://github.com/wix/wix-style-react/tree/master/src/"
          }
        }
      })
    },
    plugins: [
      ...(separateCss?
        [
          new MiniCssExtractPlugin({
          filename: isDebug ? '[name].css' : '[name].min.css',
        })
        ]:
        []
      ),
    ]
  });
  console.log('newConfig= ', newConfig);
  return newConfig;
};
