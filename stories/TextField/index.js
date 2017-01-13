import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/TextField/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('6. Common', module)
  .add('6.3 TextField', () => {
    return (
      <div>
        <Markdown source={Readme}/>
        <InteractiveCodeExample title="Customize a <TextField/>">
          <ExampleStandard/>
        </InteractiveCodeExample>
      </div>
    );
  });
