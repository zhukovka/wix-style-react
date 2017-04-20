import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CodeExample from '../utils/Components/CodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/Typography/README.md';

import ExampleHeadersTypography from './ExampleHeadersTypography';
import ExampleHeaderTypographyRaw from '!raw!./ExampleHeadersTypography';

import ExampleTextTypography from './ExampleTextTypography';
import ExampleTextTypographyRaw from '!raw!./ExampleTextTypography';

storiesOf('Common', module)
  .add('Typography', () => (
    <div>
      <Markdown source={Readme}/>

      <CodeExample title="Headers" code={ExampleHeaderTypographyRaw}>
        <ExampleHeadersTypography/>
      </CodeExample>

      <CodeExample title="Text" code={ExampleTextTypographyRaw}>
        <ExampleTextTypography/>
      </CodeExample>
    </div>
  ));
