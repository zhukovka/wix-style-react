import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from './storySettings';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import MultiSelect from '..';

import ExampleReorderable from './tests/Reorderable';
import TestTabsSwitches from './tests/TestTabsSwitches';
import TestLineNotBraking from './tests/TestLineNotBraking';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

const MultiSelectTests = storiesOf(kind, module);
MultiSelectTests.add('1. With maxNumRows', () => (
  <RTLWrapper>
    <div style={{ width: '400px' }}>
      numOfRows=2:
      <MultiSelect
        dataHook="multi-select-limited"
        tags={[
          { id: '1', label: 'aaaaaaaaaaaa' },
          { id: '2', label: 'aaaaaaaaaaaa' },
          { id: '3', label: 'aaaaaaaaaaaa' },
          { id: '4', label: 'aaaaaaaaaaaa' },
          { id: '5', label: 'aaaaaaaaaaaa' },
          { id: '6', label: 'aaaaaaaaaaaa' },
        ]}
        maxNumRows={2}
        upgrade
      />
    </div>
  </RTLWrapper>
));

MultiSelectTests.add('2. Reorderable', () => (
  <RTLWrapper>
    <ExampleReorderable />
  </RTLWrapper>
));

MultiSelectTests.add(testStories.selectMode, () => (
  <div style={{ width: '400px' }}>
    <MultiSelect
      dataHook="multi-select-mode"
      tags={[
        { id: '1', label: 'aaaaaaaaaaaa' },
        { id: '2', label: 'aaaaaaaaaaaa' },
        { id: '3', label: 'aaaaaaaaaaaa' },
        { id: '4', label: 'aaaaaaaaaaaa' },
        { id: '5', label: 'aaaaaaaaaaaa' },
        { id: '6', label: 'aaaaaaaaaaaa' },
      ]}
      mode="select"
      upgrade
    />
  </div>
));

MultiSelectTests.add(testStories.tabsSwitches, () => (
  <div>
    <input data-hook="input-for-focus-1" />
    <TestTabsSwitches />
    <input data-hook="input-for-focus-2" />
  </div>
));

MultiSelectTests.add(testStories.disabled, () => (
  <div style={{ width: '500px' }}>
    <MultiSelect
      disabled
      dataHook="disabled-multiselect"
      tags={[
        { id: '1', label: 'Alabama' },
        { id: '2', label: 'Alaska' },
        { id: '3', label: 'Arizona' },
        { id: '4', label: 'Arkansas' },
      ]}
      upgrade
    />
  </div>
));

MultiSelectTests.add(testStories.lineNotBraking, () => (
  <div style={{ width: '400px' }}>
    <TestLineNotBraking />
  </div>
));
