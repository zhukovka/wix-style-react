import React from 'react';
import {storiesOf} from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import Readme from '../../src/Range/README.md';
import ExampleStandard from './ExampleStandard';
import storySettings from './StorySettings';
import RangeTemplate from './RangeTemplate';
import moment from 'moment';

// Use fixed date for DatePicker in order for eyes comparisons not to fail.
const ARBITRARY_FIXED_DATE = moment().year(2018).dayOfYear(1);

storiesOf(storySettings.kind, module)
  .add(storySettings.storyName, () =>
    <div>
      <Markdown source={Readme}/>
      <InteractiveCodeExample title="Customize a <Range/>">
        <ExampleStandard dataHook={storySettings.dataHookInput}/>
      </InteractiveCodeExample>
      <br/>
      <h2>Range with DatePicker</h2>
      <RangeTemplate
        dataHook={storySettings.dataHookDatePicker}
        rangeType="DateRange"
        onChange={() => {}}
        firstDate={{value: ARBITRARY_FIXED_DATE}}
        lastDate={{value: ARBITRARY_FIXED_DATE}}
        />
    </div>
  );
