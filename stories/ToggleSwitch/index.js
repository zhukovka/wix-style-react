import React from 'react';
import story from '../utils/Components/Story';

import component from 'wix-style-react/ToggleSwitch';
import source from '!raw-loader!wix-style-react/ToggleSwitch/ToggleSwitch';
import readmeTestkit from '../../src/ToggleSwitch/README.TESTKIT.md';

import CodeExample from '../utils/Components/CodeExample';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleSizes from './ExampleSizes';
import ExampleSizesRaw from '!raw-loader!./ExampleSizes';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

export default story({
  category: 'Core',
  name: 'ToggleSwitch',
  component,
  componentProps: (setProps, getProps) => ({
    onChange: () => setProps({checked: !getProps().checked})
  }),
  source,
  readmeTestkit,
  examples: (
    <div>
      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Sizes" code={ExampleSizesRaw}>
        <ExampleSizes/>
      </CodeExample>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>
    </div>
  )
});
