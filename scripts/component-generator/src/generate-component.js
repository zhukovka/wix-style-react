const chalk = require('chalk');

const logger = require('./logger');
const verifyWorkingDirectory = require('./tasks/verify-working-directory');
const runPrompts = require('./tasks/run-prompts');
const copyTemplates = require('./tasks/copy-templates');
const runCodemods = require('./tasks/run-codemods');
const runLintFix = require('./tasks/run-lint-fix');

module.exports = async (cwd, options) => {
  const answers = options.answers || (await runPrompts());

  logger.info(
    `Generating ${chalk.cyan(`<${answers.ComponentName}/>`)} component...`,
  );

  return [
    {
      task: () => verifyWorkingDirectory(cwd),
      skipped: options.force,
      message: 'Verifying clean working directory',
    },
    { task: copyTemplates, message: 'Copy files' },
    {
      task: runCodemods,
      message: 'Run codemods',
      skipped: options.skipCodemods,
    },
    { task: runLintFix, message: 'Run lint fix' },
    {
      task: () => require('../../generate-testkit-exports')(),
      message: 'Generate testkit exports',
    },
  ]

    .filter(({ skipped }) => !skipped)

    .reduce(
      (promise, { task, message = '' }) =>
        promise.then(() => {
          const spinner = logger.spinner(message);

          return task(answers).then(() => {
            spinner.stop();
            logger.success(`Done: ${message}`);
          });
        }),
      Promise.resolve(),
    )

    .then(() =>
      logger.success(
        `${chalk.cyan(`<${answers.ComponentName}/>`)} generated successfully!`,
      ),
    )
    .catch(e => {
      logger.error(e);
      process.exit(1);
    });
};
