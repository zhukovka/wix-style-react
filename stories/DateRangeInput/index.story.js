import React from 'react';
import { storySettings } from './storySettings';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

import DateRangeInput from '../../src/DateRangeInput';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: DateRangeInput,
  componentPath: '../../src/DateRangeInput/DateRangeInput.js',

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
<DateRangeInput dataHook="story-date-range-input-live-example" />
        `}
      />
    </div>
  ),
};
