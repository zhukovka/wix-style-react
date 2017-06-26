import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../../utils/Components/Markdown';
import CodeExample from '../../utils/Components/CodeExample';
import Readme from '../../../src/Viewer/TextLink/README.md';
import ReadmeTestkit from '../../../src/Viewer/TextLink/README.TESTKIT.md';
import ReadmeAccessibility from '../../../src/Viewer/TextLink/README.ACCESSIBILITY.md';

import TabbedView from '../../utils/Components/TabbedView';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleDark from './ExampleDark';
import ExampleDarkRaw from '!raw!./ExampleDark';

const example =
  <div>
    <h1>Example</h1>

    <CodeExample title="Standard" code={ExampleStandardRaw}>
      <ExampleStandard/>
    </CodeExample>

    <CodeExample title="Dark" code={ExampleDarkRaw}>
      <ExampleDark/>
    </CodeExample>
  </div>;

storiesOf('Viewer', module)
  .add('TextLink', () => (
    <TabbedView tabs={['API', 'Testkit', 'Accessibility']}>
      <div>
        <Markdown source={Readme}/>
        {example}
      </div>
      <div>
        <Markdown source={ReadmeTestkit}/>
      </div>
      <div>
        <Markdown source={ReadmeAccessibility}/>
        {example}
      </div>
    </TabbedView>
  ));
