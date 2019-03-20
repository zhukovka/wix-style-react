import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import { Category } from '../../../stories/storiesHierarchy';

import Readme from '../README.md';
import ExampleStandard from './ExampleStandard';

storiesOf(Category.COMPONENTS, module).add('AutoCompleteComposite', () => {
  return (
    <div>
      <Markdown source={Readme} />
      <InteractiveCodeExample title="Customize a <AutoCompleteComposite/>">
        <ExampleStandard />
      </InteractiveCodeExample>
    </div>
  );
});
