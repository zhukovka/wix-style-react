#!/usr/bin/env node

const program = require('commander');

const generateComponent = require('../src/generate-component');
const { isProjectRoot } = require('../src/utils');
const { divider, error } = require('../src/logger');
const runPrompts = require('../src/tasks/run-prompts');

program
  .version('1.0.0')
  .description(`A component generator tailored for wix-style-react's needs`)
  .option('-f, --force', 'Skip some pre-run checks')
  .parse(process.argv);

const cwd = process.cwd();

if (!isProjectRoot(cwd)) {
  divider();
  error('Please run the generator in the root directory of the project');
  process.exit(1);
}

runPrompts().then(answers =>
  generateComponent({
    cwd,
    answers,
    force: program.force,
  }),
);
