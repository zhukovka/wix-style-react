import React from 'react';
import {storiesOf} from '@kadira/storybook';
import AutoDocs from '../utils/Components/AutoDocs';
import TabbedView from '../utils/Components/TabbedView';
import CodeExample from '../utils/Components/CodeExample';
import BadgeSource from '!raw!../../src/Badge/Badge';
import TestKitReadme from '../../src/Badge/README.TESTKIT.md';
import Markdown from '../utils/Components/Markdown'

import DefaultBadgeExample from './DefaultBadge';
import DefaultBadgeExampleRaw from '!raw!./DefaultBadge';

import AppearanceBadgeExample from './AppearanceBadge';
import AppearanceBadgeExampleRaw from '!raw!./AppearanceBadge';

import AlignmentBadgeExample from './AlignmentBadge';
import AlignmentBadgeExampleRaw from '!raw!./AlignmentBadge';

storiesOf('Core', module)
  .add('Badge', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <AutoDocs source={BadgeSource}/>

        <CodeExample title="Default" code={DefaultBadgeExampleRaw}>
          <DefaultBadgeExample/>
        </CodeExample>

        <CodeExample title="Appearance" code={AppearanceBadgeExampleRaw}>
          <AppearanceBadgeExample/>
        </CodeExample>

        <CodeExample title="Alignment" code={AlignmentBadgeExampleRaw}>
          <AlignmentBadgeExample/>
        </CodeExample>
      </div>

      <div>
        <Markdown source={TestKitReadme}/>
      </div>
    </TabbedView>
  ));
