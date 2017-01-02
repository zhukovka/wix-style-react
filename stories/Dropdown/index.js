import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Dropdown/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleManyOptions from './ExampleManyOptions';
import ExampleManyOptionsRaw from '!raw!./ExampleManyOptions';

import ExampleReactElement from './ExampleReactElements';
import ExampleReactElementRaw from '!raw!./ExampleReactElements';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('4. Layouts', module)
  .add('4.2 Dropdown (In dev)', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <div style={{paddingTop: '110px'}}/>

      <CodeExample title="Many options" code={ExampleManyOptionsRaw}>
        <ExampleManyOptions/>
      </CodeExample>

      <div style={{paddingTop: '230px'}}/>

      <CodeExample title="React elements" code={ExampleReactElementRaw}>
        <ExampleReactElement/>
      </CodeExample>

      <div style={{paddingTop: '110px'}}/>

      <CodeExample title="Controlled" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>
    </div>
  ));
