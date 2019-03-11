import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import Input from 'wix-style-react/Input';
import DateRangeInput from 'wix-style-react/DateRangeInput';
import { storySettings } from '../docs/storySettings';

export const testStories = {
  dateRangeInputVariations: 'Date Range Input variations',
};

const defaultProps = {
  value: { from: new Date(0), to: new Date(0) },
};

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

storiesOf(kind, module).add(testStories.dateRangeInputVariations, () => {
  return (
    <div>
      <br />
      <DateRangeInput dataHook={storySettings.dataHook} {...defaultProps} />
      <br />
      <DateRangeInput
        dateFormat="DD/MM/YY"
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <DateRangeInput dateFormat="HH:MM:SS" {...defaultProps} />
      <br />
      <DateRangeInput
        dateFormat={date => date.toISOString()}
        {...defaultProps}
      />
      <br />
      <DateRangeInput {...defaultProps} suffix={<Input.Affix>#</Input.Affix>} />
      <br />
      <DateRangeInput {...defaultProps} status={'error'} disabled />
    </div>
  );
});
