const multiCapabilities = new Array(10).fill({
  browserName: 'chrome',
});

module.exports.config = {
  specs: ['test/**/*.e2e.js', 'src/**/*.e2e.js'],
  baseUrl: `http://localhost:6006/`,
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  multiCapabilities,
  // capabilities: {
  //   browserName: 'chrome',
  //   shardTestFiles: true,
  //   maxInstances: 8,
  //   // chromeOptions: {
  //   //   args: ['--headless', '--window-size=1050,1075'],
  //   // },
  // },
  onPrepare() {
    require('./test/protractor-register');
    browser.ignoreSynchronization = true;
  },
};
