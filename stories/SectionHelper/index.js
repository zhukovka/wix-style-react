import React from 'react';
import story from 'story';

story({
  category: '12. SectionHelper - WIP',
  storyName: '12.1 Default',
  name: 'SectionHelper',
  componentSrcFolder: 'SectionHelper',
  componentProps: {
    children: <div>Hello, this is an example!</div>,
    title: <div>Hi</div>
  },
  exampleProps: {
    title: ['Short title', 'Really really really really long title']
  }
});
