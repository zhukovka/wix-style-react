import React from 'react';
import {storiesOf} from '@storybook/react';

import Example from './Example';

storiesOf('Core', module)
  .add('ThemedButton', () => (
    <Example/>
  ));
