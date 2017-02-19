import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Button/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleDark from './ExampleDark';
import ExampleDarkRaw from '!raw!./ExampleDark';

storiesOf('Core', module)
  .add('TextLink', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Example</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Dark" code={ExampleDarkRaw}>
        <ExampleDark/>
      </CodeExample>
    </div>
  ));
