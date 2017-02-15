import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/Notification/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('Core', module)
  .add('Notification', () => {
    return (
      <div>
        <Markdown source={Readme}/>
        <InteractiveCodeExample title="Customize a <Notification/>">
          <ExampleStandard/>
        </InteractiveCodeExample>
      </div>
    );
  });
