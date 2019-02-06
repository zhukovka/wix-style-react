import React from 'react';
import { storiesOf } from '@storybook/react';

import { LiveCode } from './internal/utils';

import { storySettings } from './storySettings';
import { getTestStoryKind } from '../storiesHierarchy';
// import style from './PageInternalStories.scss';

import DynamicPadding from '!raw-loader!./internal/DynamicPadding';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: `${storySettings.storyName}/Internal`,
});

storiesOf(kind, module).add('1. minimization compansation', () => {
  return <LiveCode title="DynamicPadding" initialCode={DynamicPadding} />;
});
