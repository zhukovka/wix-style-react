import React from 'react';

import Checkbox from 'wix-style-react/Checkbox';
import {Languages} from 'wix-style-react/Icons';

const labelExamples = [
  'Hello World!',
  <span key={0}>Hello <strong>World!</strong></span>,
  <span key={1}>Hello <Languages/></span>
];

export default {
  category: '4. Selection',
  storyName: '4.2 Checkbox',
  component: Checkbox,
  componentPath: '../src/Checkbox',

  componentProps: setState => ({
    children: labelExamples[0],
    onChange: ({target: {checked}}) => setState({checked}),
    dataHook: 'storybook-checkbox'
  }),

  exampleProps: {
    children: labelExamples,
    onChange: ({target: {checked}}) => checked ? 'Checked' : 'Unchecked'
  }
};
