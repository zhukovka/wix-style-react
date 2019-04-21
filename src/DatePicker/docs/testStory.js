import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from './storySettings';
import DatePicker from '..';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

const DatePickerTests = storiesOf(kind, module);
DatePickerTests.add(testStories.propsChangeEffectOnCalendarRendering, () => (
  <div style={{ width: '400px' }}>
    <DatePicker
      dateFormat="YYYY/MM/DD"
      isOpen
      onChange={date => date}
      placeholderText="Select Date"
      value={new Date('2017-04-30T21:00:00.000Z')}
    />
  </div>
));
