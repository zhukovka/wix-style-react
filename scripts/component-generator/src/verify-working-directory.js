const logger = require('./logger');
const utils = require('./utils');

const logErrorAndExit = errorMsg => {
  logger.error(errorMsg);
  process.exit(1);
};

module.exports = async (cwd, { skipGitChecks = false } = {}) => {
  if (!skipGitChecks) {
    if (!(await utils.isGitRepoClean(cwd))) {
      logErrorAndExit(
        'Git working directory is dirty. Commit or stash your changes, or run the generator with the --force flag',
      );
    }
  }
};
