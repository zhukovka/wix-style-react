import React from 'react';

import Input from '../../src/Input';
import { storySettings } from './storySettings';

import {
  Standard,
  Error,
  Unit,
  Controlled,
  Sizes,
  Rounded,
  InstanceMethods,
  Loader,
} from './examples';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Input,
  componentPath: '../../src/Input/Input.js',

  componentProps: setState => ({
    dataHook: storySettings.dataHook,
    value: '',
    onChange: e => setState({ value: e.target.value }),
    size: 'normal',
    statusMessage: undefined,
  }),

  exampleProps: {
    status: [
      { label: 'Input.StatusError', value: 'error' },
      { label: 'Input.StatusLoading', value: 'loading' },
    ],
  },

  examples: (
    <div>
      <Standard />
      <Error />
      <Loader />
      <Unit />
      <Controlled />
      <Sizes />
      <Rounded />
      <InstanceMethods />
    </div>
  ),
};
