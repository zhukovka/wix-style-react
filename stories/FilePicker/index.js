import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/FilePicker/README.md';

import Example from './Example';
import ExampleRaw from '!raw!./Example';

storiesOf('Core', module)
  .add('FilePicker', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleRaw}>
        <Example/>
      </CodeExample>
    </div>
  ));
