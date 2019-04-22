import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialPreview from '..';
import ImageViewer from '../../ImageViewer';

const defaultProps = {
  title: 'Click me!',
  description: 'A description for the displayed item',
  previewUrl: 'www.site-name.com',
  media: (
    <ImageViewer
      width="100%"
      height="100%"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg"
    />
  ),
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default render',
        props: {},
        componentWrapper: ({ children }) => (
          <div style={{ width: '340px' }}>{children}</div>
        ),
      },
      //TODO - The following test is disabled for now as it's not applying ellipsis behavior as expected
      // {
      //   it: 'long texts',
      //   props: {
      //     title: 'Click me!'.repeat(27),
      //     description: 'a short description for a site'.repeat(8),
      //     previewUrl: 'www.site-name.com'.repeat(28),
      //   },
      //   componentWrapper: ({ children }) => (
      //     <div style={{ width: '340px' }}>{children}</div>
      //   ),
      // },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentWrapper }) => {
    storiesOf(`SocialPreview/${describe}`, module).add(it, () => {
      const component = <SocialPreview {...defaultProps} {...props} />;
      const ComponentWrapper = componentWrapper;
      return ComponentWrapper ? (
        <ComponentWrapper>{component}</ComponentWrapper>
      ) : (
        component
      );
    });
  });
});
