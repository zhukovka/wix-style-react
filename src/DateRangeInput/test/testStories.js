import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import Input from 'wix-style-react/Input';
import DateRangeInput from 'wix-style-react/DateRangeInput';
import { testStories, storySettings } from './storySettings';

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
      <h2>Default DateRangeInput</h2>
      <DateRangeInput dataHook={storySettings.dataHook} {...defaultProps} />
      <br />
      <h2>DD/MM/YY Format</h2>
      <DateRangeInput
        dateFormat="DD/MM/YY"
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <h2>HH:mm:SS Format</h2>
      <DateRangeInput dateFormat="HH:mm:SS" {...defaultProps} />
      <br />
      <h2>Date Format function (date.toISOString)</h2>
      <DateRangeInput
        dateFormat={date => date.toISOString()}
        {...defaultProps}
      />
      <br />
      <h2>With suffix</h2>
      <DateRangeInput {...defaultProps} suffix={<Input.Affix>#</Input.Affix>} />
      <br />
      <h2>With error</h2>
      <DateRangeInput {...defaultProps} status={'error'} />
      <br />
      <h2>Disabled (with error)</h2>
      <DateRangeInput {...defaultProps} status={'error'} disabled />
    </div>
  );
});

storiesOf(kind, module).add(testStories.tabTest, () => {
  return (
    <div>
      <input data-hook="input-1" />
      <DateRangeInput dataHook={storySettings.dataHook} />
      <input data-hook="input-2" />
    </div>
  );
});
