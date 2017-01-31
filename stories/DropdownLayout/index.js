import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/DropdownLayout/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleManyOptions from './ExampleManyOptions';
import ExampleManyOptionsRaw from '!raw!./ExampleManyOptions';

import ExampleReactElement from './ExampleReactElements';
import ExampleReactElementRaw from '!raw!./ExampleReactElements';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

import ExampleTheme from './ExampleTheme';
import ExampleThemeRaw from '!raw!./ExampleTheme';

storiesOf('4. Layouts', module)
  .add('4.2 DropdownLayout', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <div style={{paddingTop: '250px'}}/>

      <CodeExample title="Many options" code={ExampleManyOptionsRaw}>
        <ExampleManyOptions/>
      </CodeExample>

      <div style={{paddingTop: '261px'}}/>

      <CodeExample title="React elements" code={ExampleReactElementRaw}>
        <ExampleReactElement/>
      </CodeExample>

      <div style={{paddingTop: '173px'}}/>

      <CodeExample title="Controlled" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>

      <div style={{paddingTop: '10px'}}/>

      <CodeExample title="With theme" code={ExampleThemeRaw}>
        <ExampleTheme/>
      </CodeExample>
    </div>
  ));
