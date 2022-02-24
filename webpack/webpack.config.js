const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { ENV } = envVars;
  const envConfig = require(`./webpack.${ENV}.js`);
  const config = merge(commonConfig, envConfig)
  return config;
}