import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import ReadMe from '../README.md';
import TabsExample from './TabsExample';

import { storySettings } from './storySettings';

storiesOf(storySettings.category, module).add(storySettings.storyName, () => (
  <div>
    <Markdown source={ReadMe} />
    <InteractiveCodeExample title="Customize a <Tabs/>">
      <TabsExample />
    </InteractiveCodeExample>
  </div>
));
