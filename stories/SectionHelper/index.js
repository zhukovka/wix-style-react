import React from 'react';
import story from 'story';
import Text from '../../src/Text';

story({
  category: '12. SectionHelper',
  storyName: '12.1 Default',
  name: 'SectionHelper',
  componentSrcFolder: 'SectionHelper',
  componentProps: {
    children: <Text appearance="T3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>,
    title: <div>Hi</div>,
    actionText: 'I understand!'
  },
  exampleProps: {
    title: ['Short title', 'Really really really really long title'],
    onAction: () => 'Triggered onAction',
    onClose: () => 'Triggered close'
  }
});
