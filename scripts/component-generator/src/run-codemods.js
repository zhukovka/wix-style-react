const path = require('path');
const { exec } = require('child_process');
const utils = require('./utils');
const logger = require('./logger');
const createValuesMap = require('./create-values-map');

const runTransform = (
  transformName,
  description,
  file,
  { ComponentName, componentName },
) => {
  return new Promise((resolve, reject) => {
    const transformPath = path.join(__dirname, 'transforms', transformName);
    const pathToExecutable = path.join(
      __dirname,
      '../../../node_modules/.bin/jscodeshift',
    );

    const spinner = logger.spinner(description);

    const execProc = exec(
      `${pathToExecutable} \
          ${file} \
          -t ${transformPath} \
          --ComponentName=${ComponentName} \
          --componentName=${componentName}`,
    );

    execProc.stderr.on('data', data => {
      spinner.error();
      logger.error(
        `Error while running codemod ${transformName}: ${data.toString()}`,
      );

      reject(data.toString());
    });

    execProc.on('exit', () => {
      spinner.stop();
      logger.success(description);

      resolve();
    });
  });
};

module.exports = async answers => {
  const { ComponentName, componentName } = createValuesMap(answers);

  await runTransform(
    'stories-file.js',
    'Adding story to the stories file',
    utils.getDestinationPath('stories/index.js'),
    { ComponentName, componentName },
  );

  await runTransform(
    'index-file.js',
    'Adding component export to the index file',
    utils.getDestinationPath('src/index.js'),
    { ComponentName, componentName },
  );

  await runTransform(
    'testkit-exports.js',
    'Add testkit exports',
    [
      utils.getDestinationPath('testkit/protractor.js'),
      utils.getDestinationPath('testkit/puppeteer.js'),
    ].join(' '),
    { ComponentName, componentName },
  );
};
