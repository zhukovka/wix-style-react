import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Loader/README.md';

import ExampleSizes from './ExampleSizes';
import ExampleSizesRaw from '!raw!./ExampleSizes';

import ExampleWithText from './ExampleWithText';
import ExampleWithTextRaw from '!raw!./ExampleWithText';

storiesOf('Core', module)
  .add('Loader', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Sizes" code={ExampleSizesRaw}>
        <ExampleSizes/>
      </CodeExample>

      <CodeExample title="WithText" code={ExampleWithTextRaw}>
        <ExampleWithText/>
      </CodeExample>
    </div>
  ));
