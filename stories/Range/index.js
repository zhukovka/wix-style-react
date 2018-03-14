import React from 'react';
import {storiesOf} from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import Readme from '../../src/Range/README.md';
import ExampleStandard from './ExampleStandard';
import storySettings from './StorySettings';

storiesOf(storySettings.kind, module)
  .add(storySettings.storyName, () =>
    <div>
      <Markdown source={Readme}/>
      <InteractiveCodeExample title="Customize a <Range/>">
        <ExampleStandard/>
      </InteractiveCodeExample>
    </div>
  );
