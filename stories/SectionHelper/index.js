import React from 'react';
import story from 'story';

story({
  category: '12. SectionHelper - WIP',
  storyName: '12.1 Default',
  name: 'SectionHelper',
  componentSrcFolder: 'SectionHelper',
  componentProps: {
    children: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>,
    title: <div>Hi</div>
  },
  exampleProps: {
    title: ['Short title', 'Really really really really long title']
  }
});
