import React from 'react';
import { storiesOf } from '@storybook/react';
import { StickyContainer, Sticky } from 'react-sticky';
import { LiveCode } from './internal/utils';

import { storySettings } from './storySettings';
import { getTestStoryKind } from '../storiesHierarchy';
// import style from './PageInternalStories.scss';

import DynamicPadding from '!raw-loader!./internal/DynamicPadding';
import PageWithSticky from '!raw-loader!./internal/PageWithSticky';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: `${storySettings.storyName}/Internal`,
});

storiesOf(kind, module).add('1. minimization compansation', () => {
  return <LiveCode title="DynamicPadding" initialCode={DynamicPadding} />;
});

storiesOf(kind, module).add('2. Page With Sticky', () => {
  return (
    <LiveCode
      title="PageWithSticky"
      initialCode={PageWithSticky}
      scope={{ StickyContainer, Sticky }}
    />
  );
});
