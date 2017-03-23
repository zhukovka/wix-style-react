import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import TabbedView from '../utils/Components/TabbedView';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Checkbox/README.md';
import ReadmeTestKit from '../../src/Checkbox/README.TESTKIT.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleIndeterminate from './ExampleIndeterminate';
import ExampleIndeterminateRaw from '!raw!./ExampleIndeterminate';

import ExampleRtl from './ExampleRtl';
import ExampleRtlRaw from '!raw!./ExampleRtl';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('Core', module)
  .add('Checkbox', () => (
    <TabbedView tabs={['API Documentation', 'TestKits Documentation']}>
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
      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  ));
