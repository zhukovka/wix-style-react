import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CodeExample from '../utils/Components/CodeExample';
import ExampleIcons from './ExampleIcons';

import ExampleIconsRaw from '!raw!./ExampleIcons';

storiesOf('6. Common', module)
  .add('6.5 Icons', () => (
    <div>
      <h1>Icons</h1>
      <CodeExample title="Icons" code={ExampleIconsRaw}>
        <ExampleIcons/>
      </CodeExample>
    </div>
  ));
