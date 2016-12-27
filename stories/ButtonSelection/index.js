import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/ButtonSelection/README.md';
import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('2. Switches', module)
  .add('2.4 ButtonSelection', () => (
    <div>
      <Markdown source={Readme}/>
      <h1>Usage examples</h1>
      <CodeExample code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>
    </div>
  ));
