#!/usr/bin/env node

const rimraf = require('rimraf');

const generateComponent = require('../src/generate-component');
const {
  isProjectRoot,
  isInTeamCity,
  isGitRepoClean,
  getComponentPath,
} = require('../src/utils');
const { divider, error, info } = require('../src/logger');

const cwd = process.cwd();

const ComponentName = 'GeneratedTestComponent';

const run = async () => {
  if (!isProjectRoot(cwd)) {
    divider();
    error('Please run the generator in the root directory of the project');
    process.exit(1);
  }

  const testComponentPath = getComponentPath(ComponentName);
  if (testComponentPath) {
    rimraf.sync(testComponentPath);
  }

  await generateComponent({
    cwd,
    force: true,
    skipCodemods: true,
    answers: {
      ComponentName,
      description: 'This is an automatically generated test component',
      testComponent: true,
    },
  });

  if (isInTeamCity() && !(await isGitRepoClean(cwd))) {
    divider();
    info(
      `Component generation has completed but the git repository is dirty This may
  indicate that the <GeneratedTestComponent/> is not updated in the current
  branch. You may want to regenerate the component and push the changes to master.`,
    );

    divider();
    info(
      `You can regenerate the test component by running:

      $ npm run generate`,
    );

    divider();

    /* eslint-disable-next-line no-console */
    console.log(
      `##teamcity[buildStatus text='{build.status.text}; generated test component may be outdated']`,
    );
  }
};

run();
