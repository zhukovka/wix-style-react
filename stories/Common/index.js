import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CodeExample from '../utils/Components/CodeExample';

import ExampleTypography from './ExampleTypography';

storiesOf('6. Common', module)
  .add('6.1 Typography', () => (
    <div>
      <h1>Typography</h1>
      <ExampleTypography/>
    </div>
  ));
