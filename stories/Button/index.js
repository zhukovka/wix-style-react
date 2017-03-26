import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import TabbedView from '../utils/Components/TabbedView';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Button/README.md';
import ReadmeTestKit from '../../src/Button/README.TESTKIT.md';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';
import IconsExample from './ExampleWithIcons';
import IconsExampleRaw from '!raw!./ExampleWithIcons';

storiesOf('Core', module)
  .add('Button', () => (
    <TabbedView tabs={['API Documentation', 'TestKits Documentation']}>
      <div>
        <Markdown source={Readme}/>
        <h1>Example</h1>
        <CodeExample title="With icons" code={IconsExampleRaw}>
          <IconsExample/>
        </CodeExample>
        <CodeExample title="Controlled" code={ExampleControlledRaw}>
          <ExampleControlled/>
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  ));
