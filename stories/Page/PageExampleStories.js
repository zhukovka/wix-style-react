import React from 'react';
import { storiesOf } from '@storybook/react';
import { Category } from '../storiesHierarchy';

import { FullPageExample } from './FullPageExample';
import ExampleStandAlone from './ExampleStandAlone';
import ExampleStandard from './ExampleStandard';

const PageExampleStories = storiesOf(
  `${Category.LAYOUT}/2.5 Page Examples`,
  module,
);

PageExampleStories.add('1. BM Like Layout', () => <FullPageExample />);
PageExampleStories.add('2. StandAlone', () => <ExampleStandAlone />);
PageExampleStories.add('3. Standard', () => <ExampleStandard />);
