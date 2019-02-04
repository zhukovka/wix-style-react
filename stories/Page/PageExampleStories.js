import React from 'react';
import { storiesOf } from '@storybook/react';
import { Category } from '../storiesHierarchy';

import { FullPageExample } from './FullPageExample';
import ExampleStandAlone from './ExampleStandAlone';
import ExampleStandard from './ExampleStandard';
import ExampleStretchContent from './ExampleStretchContent';
import ExampleStretchTable from './ExampleStretchTable';

const PageExampleStories = storiesOf(
  `${Category.LAYOUT}/2.5 Page Examples`,
  module,
);

PageExampleStories.add('1. StandAlone', () => <ExampleStandAlone />);
PageExampleStories.add('2. Standard', () => <ExampleStandard />);
PageExampleStories.add('3. Stretched Content', () => <ExampleStretchContent />);
PageExampleStories.add('4. Stretched Table In Page', () => (
  <ExampleStretchTable />
));
PageExampleStories.add('99. Deprecated Example', () => <FullPageExample />);
