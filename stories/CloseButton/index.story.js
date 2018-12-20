import React from 'react';
import CloseButton from 'wix-style-react/CloseButton';
import { storySettings } from './storySettings';

import CloseButtonStory from './examples';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: CloseButton,
  componentPath: '../../src/CloseButton',

  componentProps: {
    as: 'button',
    skin: 'standard',
    size: 'small',
    disabled: false,
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    as: ['button', 'a', 'span', 'div'],
  },

  examples: <CloseButtonStory />,
};
