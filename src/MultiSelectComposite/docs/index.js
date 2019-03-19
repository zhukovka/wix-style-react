import React from 'react';
import { storiesOf } from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import { Category } from '../../../stories/storiesHierarchy';

import Readme from '../README.md';
import ExampleStandard from './ExampleStandard';

storiesOf(Category.COMPONENTS, module).add('MultiSelectComposite', () => (
  <div>
    <Markdown source={Readme} />

    <InteractiveCodeExample title="Customize a <MultiSelectComposite/>">
      <ExampleStandard />
    </InteractiveCodeExample>
  </div>
));
