import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/DataTable/README.md';

import Example from './Example';
import ExampleRaw from '!raw!./Example';

import ExampleCallingServer from './ExampleCallingServer';
import ExampleCallingServerRaw from '!raw!./ExampleCallingServer';

storiesOf('5. Others', module)
  .add('5.7 DataTable', () => (
    <div>
      <Markdown source={Readme}/>
      <h1>Usage examples</h1>
      <CodeExample title="With infinite scroll" code={ExampleRaw}>
        <Example/>
      </CodeExample>
      <CodeExample title="With server calling (up to 100 items)" code={ExampleCallingServerRaw}>
        <ExampleCallingServer/>
      </CodeExample>
    </div>
  ));
