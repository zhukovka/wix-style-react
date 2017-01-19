import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CodeExample from '../utils/Components/CodeExample';
import Markdown from '../utils/Components/Markdown';

import ExampleGrid from './ExampleGrid';
import ExampleGridRaw from '!raw!./ExampleGrid';
import Readme from '../../src/Grid/README.md';

storiesOf('4. Layouts', module)
  .add('4.5 Grid with card layout', () => (
    <div>
      <Markdown source={Readme}/>
      <CodeExample title="Grid with card layout" code={ExampleGridRaw}>
        <ExampleGrid/>
      </CodeExample>
    </div>
  ));
