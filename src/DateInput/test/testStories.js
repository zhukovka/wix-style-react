import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import Input from 'wix-style-react/Input';
import DateInput from 'wix-style-react/DateInput';
import { testStories, storySettings } from './storySettings';

const defaultProps = {
  value: new Date(0),
};
const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

storiesOf(kind, module).add(testStories.dateInputVariations, () => {
  return (
    <div>
      <br />
      <DateInput dataHook={storySettings.dataHook} {...defaultProps} />
      <br />
      <DateInput
        dateFormat="DD/MM/YY"
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <DateInput
        dateFormat="HH:MM:SS"
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <DateInput
        dateFormat={date => date.toISOString()}
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <DateInput
        dataHook={storySettings.dataHook}
        {...defaultProps}
        prefix={<Input.Affix>#</Input.Affix>}
      />
      <br />
      <DateInput dataHook={storySettings.dataHook} {...defaultProps} disabled />
    </div>
  );
});
