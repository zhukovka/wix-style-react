import React from 'react';
import {storiesOf} from '@storybook/react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Example from './Example';
import ControlledHeadingExampleRaw from '!raw-loader!./Example';

storiesOf('1. Foundation', module)
  .add('1.3 Heading', () =>
    <div>
      <CodeExample title="Heading" code={ControlledHeadingExampleRaw}>
        <Example/>
      </CodeExample>
    </div>
  );
