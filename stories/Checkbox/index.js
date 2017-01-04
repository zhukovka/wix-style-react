import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Checkbox/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleIndeterminate from './ExampleIndeterminate';
import ExampleIndeterminateRaw from '!raw!./ExampleIndeterminate';

import ExampleRtl from './ExampleRtl';
import ExampleRtlRaw from '!raw!./ExampleRtl';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('2. Switches', module)
  .add('2.2 Checkbox', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Indeterminate" code={ExampleIndeterminateRaw}>
        <ExampleIndeterminate/>
      </CodeExample>

      <CodeExample title="Rtl" code={ExampleRtlRaw}>
        <ExampleRtl/>
      </CodeExample>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>
    </div>
  ));
