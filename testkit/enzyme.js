import path from 'path';

import {
  enzymeTestkitFactoryCreator,
  enzymeUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/enzyme';

import AllComponents from '../scripts/all-components';

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

const isNotIgnored = name =>
  COMPONENT_DEFINITIONS[name] ? !COMPONENT_DEFINITIONS[name].ignore : true;

const exportableTestkits = Object.keys(AllComponents)
  .filter(isNotIgnored)

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

// additional exports are NOT tested automatically, they are tested within component specs
// TODO: they should be tested automatically, but because they're compound components with nondeterministic
// locations, for now it's just manual
const ADDITIONAL_TESTKITS = {
  // TODO: is this component in use at all?
  backofficeTooltipTestkitFactory: '../src/Backoffice/Tooltip/Tooltip.driver',

  tpaButtonTestkitFactory: '../src/TPA/Button/Button.driver',
  tpaTextLinkTestkitFactory: '../src/TPA/TextLink/TextLink.driver',

  radioButtonTestkitFactory: '../src/RadioGroup/RadioButton/RadioButton.driver',
  editableRowTestkitFactory:
    '../src/EditableSelector/EditableRow/EditableRow.driver',
  tpaInputTestkitFactory: '../src/TPA/Input/Input.driver',

  // TODO: this is actually  Card.Header, but is exported just as header
  headerTestkitFactory: '../src/Card/Header/Header.driver',

  buttonHeaderTestkitFactory: '../src/Card/ButtonHeader/ButtonHeader.driver',
  linkHeaderTestkitFactory: '../src/Card/LinkHeader/LinkHeader.driver',
  messageBoxMarketerialLayoutTestkitFactory:
    '../src/MessageBox/MessageBoxMarketerialLayout.driver',

  messageBoxFunctionalLayoutTestkitFactory:
    '../src/MessageBox/MessageBoxFunctionalLayout.driver',

  multiSelectCheckboxTestkitFactory:
    '../src/MultiSelectCheckbox/MultiSelectCheckbox.driver',

  multiSelectTestkitFactory: '../src/MultiSelect/MultiSelect.driver',

  buttonWithOptionsTestkitFactory:
    '../src/ButtonWithOptions/ButtonWithOptions.driver',

  iconWithOptionsTestkitFactory:
    '../src/IconWithOptions/IconWithOptions.driver',
  datePickerTestkitFactory: '../src/DatePicker/DatePicker.driver',

  textLinkLayoutTestkitFactory:
    '../src/BaseComponents/TextLinkLayout/TextLinkLayout.driver',
};

const requireAdditionalTestkits = testkits =>
  Object.entries(testkits).reduce((acc, [name, importPath]) => {
    acc[name] = enzymeTestkitFactoryCreator(require(importPath).default);
    return acc;
  }, {});

module.exports = {
  ...exportableTestkits,
  ...requireAdditionalTestkits(ADDITIONAL_TESTKITS),
};
