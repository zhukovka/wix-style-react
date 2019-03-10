import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../storiesHierarchy';

import Input from '../../../src/Input';
import { DateRangeInput } from '../../../src';
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
      <DateRangeInput dataHook={storySettings.dataHook} {...defaultProps} />
      <br />
      <DateRangeInput
        dateFormat="DD/MM/YY"
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <DateRangeInput
        dateFormat="HH:MM:SS"
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <DateRangeInput
        dateFormat={date => date.toISOString()}
        dataHook={storySettings.dataHook}
        {...defaultProps}
      />
      <br />
      <DateRangeInput
        dataHook={storySettings.dataHook}
        {...defaultProps}
        suffix={<Input.Affix>#</Input.Affix>}
      />
      <br />
      <DateRangeInput
        dataHook={storySettings.dataHook}
        {...defaultProps}
        status={'error'}
        disabled
      />
    </div>
  );
});
