import React from 'react';

import ButtonLayout from 'wix-style-react/ButtonLayout';

export default {
  category: '5. Buttons',
  storyName: '5.0 ButtonLayout',
  component: ButtonLayout,
  componentPath: '../src/ButtonLayout',
  componentProps: {
    children: (
      <a
        href="http://www.wix.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'inherit'}}
        >
        Link Like Button
      </a>
    )
  }
};
