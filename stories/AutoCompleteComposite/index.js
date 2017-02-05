import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/AutoCompleteComposite/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('6. Common', module)
  .add('6.7 AutoCompleteComposite', () => {
    return (
      <div>
        <Markdown source={Readme}/>
        <InteractiveCodeExample title="Customize a <AutoCompleteComposite/>">
          <ExampleStandard/>
        </InteractiveCodeExample>
      </div>
    );
  });
