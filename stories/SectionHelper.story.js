import React from 'react';
import Text from 'wix-style-react/Text';
import SectionHelper from 'wix-style-react/SectionHelper';

/* eslint-disable react/jsx-key */
const childrenExamples = [
  <Text appearance="T3">
    Are you sure about the thing?
  </Text>,
  <Text appearance="T3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Text>
];
/* eslint-enable react/jsx-key */

const titleExamples = [
  'A message!',
  'Please pay attention to this message with long title!'
];

export default {
  category: '12. SectionHelper',
  storyName: '12.1 Default',

  component: SectionHelper,
  componentPath: '../src/SectionHelper',

  componentProps: {
    title: titleExamples[0],
    children: childrenExamples[0],
    actionText: 'I understand!'
  },

  exampleProps: {
    title: titleExamples,
    children: childrenExamples,
    onAction: () => 'Triggered onAction',
    onClose: () => 'Triggered close'
  }
};
