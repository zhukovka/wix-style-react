import React from 'react';
import {storiesOf} from '@storybook/react';
import CodeExample from '../utils/Components/CodeExample';

import StatsWidgetSource from '!raw-loader!../../src/StatsWidget/StatsWidget';

import ExampleStatsWidgetStandard from './ExampleStatsWidgetStandard';
import ExampleStatsWidgetStandardRaw from '!raw-loader!./ExampleStatsWidgetStandard';

import ExampleStatsWidgetWithPercents from './ExampleStatsWidgetWithPercents';
import ExampleStatsWidgetWithPercentsRaw from '!raw-loader!./ExampleStatsWidgetWithPercents';

import ExampleStatsWidgetWithFilters from './ExampleStatsWidgetWithFilters';
import ExampleStatsWidgetWithFiltersRaw from '!raw-loader!./ExampleStatsWidgetWithFilters';
import AutoDocs from '../utils/Components/AutoDocs';
import ReadmeTestkit from '../../src/StatsWidget/README.TESTKIT.md';
import TabbedView from '../utils/Components/TabbedView';
import Markdown from '../utils/Components/Markdown';


storiesOf('Core', module)
  .add('Stats Widget', () => (
    <TabbedView tabs={['Usage', 'Testkit']}>
      <div>

        <AutoDocs source={StatsWidgetSource}/>

        <h1>Usage examples</h1>

        <CodeExample title="Stats widget" code={ExampleStatsWidgetStandardRaw}>
          <ExampleStatsWidgetStandard/>
        </CodeExample>
        <CodeExample title="Stats widget example with percents" code={ExampleStatsWidgetWithPercentsRaw}>
          <ExampleStatsWidgetWithPercents/>
        </CodeExample>
        <CodeExample title="Stats widget example with filters" code={ExampleStatsWidgetWithFiltersRaw}>
          <ExampleStatsWidgetWithFilters/>
        </CodeExample>
      </div>
      <div>
        <Markdown source={ReadmeTestkit}/>
      </div>
    </TabbedView>
  ));
