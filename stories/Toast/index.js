import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Toast/README.md';

import ExampleTopbar from './ExampleTopbar';
import ExampleTopbarRaw from '!raw!./ExampleTopbar';

storiesOf('5. Others', module)
  .add('5.3 Toast', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Topbar" code={ExampleTopbarRaw}>
        <ExampleTopbar/>
      </CodeExample>

    </div>
  ));
