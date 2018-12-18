import fs from 'fs';
import path from 'path';

const NON_COMPONENT_FOLDER_NAMES = [
  'utils',
  'providers',
  'new-icons',
  'dnd-styles',
  'assets',
  'clients',
  'mixins',
  'common',
  'FieldLabelAttributes',
  'Backoffice',
  'BaseComponents',
  'Typography',
  'TPA',
  'Animations',
  'CalendarPanel',
];

const cwd = path.resolve(__dirname, '..', 'src');

const matches = haystack => needle => haystack.some(h => needle === h);

const defaultOrRoot = object => object.default || object;

const componentNameInvalidators = [
  path.extname,
  matches(NON_COMPONENT_FOLDER_NAMES.concat(NON_COMPONENT_FOLDER_NAMES)),
];

const components = fs
  .readdirSync(cwd)
  .filter(file => !componentNameInvalidators.some(v => v(file)));

const allComponents = components.reduce((a, c) => {
  const ref = require(path.resolve(cwd, c));
  a[c] = defaultOrRoot(ref);
  return a;
}, {});

export default allComponents;
