const {WsrSnapPlugin} = require('./plugins/wsr-snap-plugin');

const config = {
  plugins: [
    new WsrSnapPlugin()
  ]
};

module.exports = config;
