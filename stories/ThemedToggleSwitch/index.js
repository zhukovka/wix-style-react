import React from 'react';
import {storiesOf} from '@storybook/react';

import Example from './Example';

storiesOf('themes', module)
  .add('ThemedToggleSwitch', () => (
    <Example/>
  ));
