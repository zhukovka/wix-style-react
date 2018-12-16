const chalk = require('chalk');

const logger = require('./logger');
const verifyWorkingDirectory = require('./verify-working-directory');
const runPrompts = require('./run-prompts');
const copyTemplates = require('./copy-templates');
const runCodemods = require('./run-codemods');
const runLintFix = require('./run-lint-fix');

module.exports = async (cwd, options) => {
  await verifyWorkingDirectory(cwd, {
    skipGitChecks: options.force,
  });

  const answers = options.answers || (await runPrompts());

  logger.info(
    `Generating a new ${chalk.cyan(
      `<${answers.ComponentName}/>`,
    )} component for you...`,
  );

  logger.divider();
  await copyTemplates(answers);

  if (!options.skipCodemods) {
    logger.divider();
    await runCodemods(answers);
  }

  logger.divider();
  await runLintFix(answers);

  logger.divider();

  logger.success(
    `The ${chalk.cyan(
      `<${answers.ComponentName}/>`,
    )} component has been generated!`,
  );
};
