import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Select/README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleDirectionUp from './ExampleDirectionUp';
import ExampleDirectionUpRaw from '!raw!./ExampleDirectionUp';

import ExamplePlaceholder from './ExamplePlaceholder';
import ExamplePlaceholderRaw from '!raw!./ExamplePlaceholder';

import ExampleReactElements from './ExampleReactElements';
import ExampleReactElementsRaw from '!raw!./ExampleReactElements';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('1. Inputs', module)
  .add('1.2 Select', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="DirectionUp" code={ExampleDirectionUpRaw}>
        <ExampleDirectionUp/>
      </CodeExample>

      <CodeExample title="Placeholder" code={ExamplePlaceholderRaw}>
        <ExamplePlaceholder/>
      </CodeExample>

      <CodeExample title="ReactElements" code={ExampleReactElementsRaw}>
        <ExampleReactElements/>
      </CodeExample>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>
    </div>
  ));
