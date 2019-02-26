import React from 'react';
import { storySettings } from './storySettings';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

import DateInput from '../../src/DateInput';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: DateInput,
  componentPath: '../../src/DateInput/DateInput.js',

  componentProps: {
    dataHook: storySettings.dataHook,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  examples: (
    <div style={{ maxWidth: 627 }}>
      <LiveCodeExample
        compact
        title="Live code example"
        initialCode={`
<DateInput
  dataHook="story-date-input-live-example"
  />
        `}
      />
    </div>
  ),
};
