import React from 'react';
import { storySettings } from './storySettings';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

import DateRangePicker from '../../src/DateRangePicker';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: DateRangePicker,
  componentPath: '../../src/DateRangePicker/DateRangePicker.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    buttonText: undefined,
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
<DateRangePicker
  dataHook="story-date-range-picker-live-example"
  buttonText="Press me for a surprise"
  />
        `}
      />
    </div>
  ),
};

