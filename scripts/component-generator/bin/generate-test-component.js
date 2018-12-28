#!/usr/bin/env node

/* eslint-disable no-console */
const chalk = require('chalk');
const { generateComponent, utils, logger } = require('../src');

const cwd = process.cwd();

const run = async () => {
  if (!utils.isProjectRoot(cwd)) {
    logger.divider();
    logger.error(
      'Please run the generator in the root directory of the project',
    );
    process.exit(1);
  }

  await generateComponent(cwd, {
    force: true,
    skipCodemods: true,
    answers: {
      ComponentName: 'GeneratedTestComponent',
      description: 'This is an automatically generated test component',
      testComponent: true,
    },
  });

  if (utils.isInTeamCity() && !(await utils.isGitRepoClean(cwd))) {
    logger.divider();
    logger.info(
      `Component generation has completed but the git repository is dirty This may
  indicate that the <GeneratedTestComponent/> is not updated in the current
  branch. You may want to regenerate the component and push the changes to master.`,
    );

    logger.divider();
    logger.info(
      `You can regenarte the test component by running:

      $ npm run generate`,
    );

    console.log(
      `##teamcity[buildStatus text='{build.status.text}; generated test component may be outdated']`,
    );
  }
};

run();
