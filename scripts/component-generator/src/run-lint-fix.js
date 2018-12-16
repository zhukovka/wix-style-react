const path = require('path');
const { exec } = require('child_process');
const utils = require('./utils');
const logger = require('./logger');

const runLintFix = glob => {
  return new Promise(resolve => {
    const pathToExecutable = path.join(
      __dirname,
      '../../../node_modules/.bin/yoshi',
    );

    const execProc = exec(`${pathToExecutable} lint --fix ${glob}`);
    execProc.on('exit', resolve);
  });
};

module.exports = async ({ ComponentName }) => {
  logger.info('Fixing potential lint issues');

  await runLintFix(
    `${utils.getComponentPath(ComponentName)}/* ${utils.getComponentStoryPath(
      ComponentName,
    )}/*`,
  );

  logger.success('Lint fix succeeded');
};
