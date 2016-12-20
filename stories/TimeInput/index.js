import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/TimeInput/README.md';

import ExampleUncontrolled from './ExampleUncontrolled';
import ExampleUncontrolledRaw from '!raw!./ExampleUncontrolled';
import moment from 'moment';

storiesOf('1. Inputs', module)
  .add('1.6 TimeInput', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Uncontrolled input" code={ExampleUncontrolledRaw}>
        <ExampleUncontrolled startTime={moment('2016-04-03 13:42')}/>
      </CodeExample>
    </div>
  ));
