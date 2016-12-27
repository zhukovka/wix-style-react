import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/SideBar/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

storiesOf('5. Others', module)
  .add('5.6 SideBar - Under Development', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>
    </div>
  ));
