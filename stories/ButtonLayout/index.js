import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../utils/Components/Markdown';
import AutoDocs from '../utils/Components/AutoDocs';
import ButtonLayoutSource from '!raw-loader!wix-style-react/ButtonLayout/ButtonLayout';
import CodeExample from '../utils/Components/CodeExample';
import TabbedView from '../utils/Components/TabbedView';
import ReadmeTestKit from '../../src/ButtonLayout/README.TESTKIT.md';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

storiesOf('Core', module)
  .add('Button Layout', () => (
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <AutoDocs source={ButtonLayoutSource}/>

        <h1>Example</h1>

        <CodeExample title="Controlled" code={ExampleControlledRaw}>
          <ExampleControlled/>
        </CodeExample>
      </div>

      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  ));
