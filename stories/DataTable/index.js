import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/DataTable/README.md';
import Example from './Example';
import ExampleRaw from '!raw!./Example';

storiesOf('5. Others', module)
  .add('5.7 DataTable', () => (
    <div>
      <Markdown source={Readme}/>
      <h1>Usage examples</h1>
      <CodeExample title="With infinite scroll" code={ExampleRaw}>
        <Example/>
      </CodeExample>
    </div>
  ));
