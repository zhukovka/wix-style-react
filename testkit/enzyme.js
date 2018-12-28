import path from 'path';

import {
  enzymeTestkitFactoryCreator,
  enzymeUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/enzyme';

import AllComponents from './all-components';

import COMPONENT_DEFINITIONS from './component-definitions';

const cwd = path.resolve(__dirname, '..', 'src');
const TESTKIT_EXTENSION = '.driver';

const lowerFirst = string => string[0].toLowerCase() + string.slice(1);

const extractSingleExport = object =>
  object.default
    ? object.default
    : Object.keys(object).length === 1
    ? Object.values(object)[0]
    : object;

const importTestkit = name => {
  const testkitPath = path.resolve(cwd, name, name + TESTKIT_EXTENSION);

  try {
    return extractSingleExport(require(testkitPath));
  } catch (e) {
    throw new Error(
      `ERROR: Unable to require ${testkitPath} Ensure ${name} component has enzyme testkit and it is exported correctly, or set it in component-definitions, ${e}`,
    );
  }
};

const hasTestkit = name =>
  COMPONENT_DEFINITIONS[name] ? !COMPONENT_DEFINITIONS[name].noTestkit : true;

const exportableTestkits = Object.keys({
  ...AllComponents, // TODO: AllComponents does not yet include all components, because there are nested folders that are treated as top level components
  ...COMPONENT_DEFINITIONS,
})
  .filter(hasTestkit)

  .reduce((testkits, name) => {
    const definition = COMPONENT_DEFINITIONS[name] || {};
    const testkitName = lowerFirst(name) + 'TestkitFactory';
    const factoryCreator = definition.unidriver
      ? enzymeUniTestkitFactoryCreator
      : enzymeTestkitFactoryCreator;

    let testkit;

    if (definition.enzymeTestkit) {
      testkit = definition.enzymeTestkit;
    } else if (definition.enzymeTestkitFactory) {
      testkit = factoryCreator(definition.enzymeTestkitFactory);
    }

    if (!testkit) {
      const factory = importTestkit(name);
      testkit = factoryCreator(factory);
    }

    testkits[testkitName] = testkit;

    return testkits;
  }, {});

module.exports = exportableTestkits;
