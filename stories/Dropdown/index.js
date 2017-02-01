import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Dropdown/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

import ExampleWithCustomValue from './ExampleWithCustomValue';
import ExampleWithCustomValueRaw from '!raw!./ExampleWithCustomValue';

storiesOf('1. Inputs', module)
  .add('1.8 Dropdown', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Controlled Dropdown" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>

      <CodeExample title="Custom Values in Dropdown" code={ExampleWithCustomValueRaw}>
        <ExampleWithCustomValue/>
      </CodeExample>
    </div>
  ));
