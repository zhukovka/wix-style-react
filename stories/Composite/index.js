import React from 'react';
import {storiesOf} from '@kadira/storybook';

import CodeExample from '../utils/Components/CodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/Composite/README.md';

import ExampleComposite from './ExampleComposite';
import ExampleCompositeRaw from '!raw!./ExampleComposite';

storiesOf('6. Common', module)
  .add('6.2 Composites', () => (
    <div>
      <h1>Composites</h1>
      <Markdown source={Readme}/>
      <CodeExample title="Example" code={ExampleCompositeRaw}>
        <p>Require both Label and Input and change the order when rendering</p>
        <ExampleComposite/>
      </CodeExample>
    </div>
  ));
