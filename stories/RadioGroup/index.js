import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import AutoDocs from '../utils/Components/AutoDocs';
import TabbedView from '../utils/Components/TabbedView';
import CodeExample from '../utils/Components/CodeExample';
import ReadmeTestKit from '../../src/RadioGroup/README.TESTKIT.md';

import RadioGroupSource from '!raw!../../src/RadioGroup/RadioGroup';
import RadioGroupRadioSource from '!raw!../../src/RadioGroup/RadioButton/RadioButton';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExamplevAlign from './ExamplevAlign';
import ExamplevAlignRaw from '!raw!./ExamplevAlign';

import ExampleHorizontal from './ExampleHorizontal';
import ExampleHorizontalRaw from '!raw!./ExampleHorizontal';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('Core', module)
  .add('RadioGroup', () => (
    <TabbedView tabs={['API Documentation', 'TestKits Documentation']}>
      <div>
        <AutoDocs source={RadioGroupSource}/>
        <AutoDocs source={RadioGroupRadioSource}/>

        <h1>Usage examples</h1>

        <CodeExample title="Standard" code={ExampleStandardRaw}>
          <ExampleStandard/>
        </CodeExample>

        <CodeExample title="vAlign" code={ExamplevAlignRaw}>
          <ExamplevAlign/>
        </CodeExample>

        <CodeExample title="Horizontal" code={ExampleHorizontalRaw}>
          <ExampleHorizontal/>
        </CodeExample>

        <CodeExample title="Controlled input" code={ExampleControlledRaw}>
          <ExampleControlled/>
        </CodeExample>
      </div>

      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  ));
