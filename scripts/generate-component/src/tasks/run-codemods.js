const path = require('path');
const { exec } = require('child_process');

const utils = require('../utils');
const logger = require('../logger');
const createValuesMap = require('../create-values-map');

const codemods = [
  {
    codemod: 'stories-file.js',
    dist: 'stories/index.js',
    description: 'Add story to the stories file',
  },

  {
    codemod: 'index-file.js',
    dist: 'src/index.js',
    description: 'Add component export to the index file',
  },

  {
    codemod: 'testkit-definitions.js',
    dist: 'testkit/testkit-definitions.js',
    description: 'Update testkit-definitions.js file',
  },

  {
    codemod: 'testkit-exports.js',
    dist: 'testkit/protractor.js',
    description: 'Add Protractor testkit export',
  },

  {
    codemod: 'testkit-exports.js',
    dist: 'testkit/puppeteer.js',
    description: 'Add Puppeteer testkit export',
  },
];

const runCodemod = ({
  codemod,
  dist,
  description,
  options: { ComponentName, componentName },
}) =>
  new Promise((resolve, reject) => {
    const codemodPath = path.join(__dirname, '..', 'codemods', codemod);
    const pathToExecutable = path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'node_modules',
      '.bin',
      'jscodeshift',
    );

    const execProc = exec(
      `${pathToExecutable} \
          ${utils.getDestinationPath(dist)} \
          -t ${codemodPath} \
          --ComponentName=${ComponentName} \
          --componentName=${componentName}`,
    );

    execProc.stderr.on('data', data => {
      logger.error(`Error while running codemod ${name}: ${data.toString()}`);
      reject(data.toString());
    });

    execProc.on('exit', () => {
      logger.success(description);
      resolve();
    });
  });

module.exports = ({ answers }) =>
  Promise.all(
    codemods.map(codemod =>
      runCodemod({ ...codemod, options: createValuesMap(answers) }),
    ),
  );
