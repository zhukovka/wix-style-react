import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../storiesHierarchy';
import { storySettings } from './storySettings';
import { RTLWrapper } from '../utils';
import MultiSelect from '../../src/MultiSelect';
import ExampleReorderable from './ExampleReorderable';

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
