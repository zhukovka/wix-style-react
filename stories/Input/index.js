import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Input/README.md';

import TabbedView from '../utils/Components/TabbedView';
import Examples from './Examples';

import ExamplePaneltitleStyle from './ExamplePaneltitleStyle';
import ExamplePaneltitleStyleRaw from '!raw!./ExamplePaneltitleStyle';

storiesOf('Core', module)
  .add('Input', () => (
    <TabbedView tabs={['API Documentation', 'Themes']}>
      <div>
        <Markdown source={Readme}/>
        <h1>Usage examples</h1>
        <Examples/>
      </div>
      <div>
        <TabbedView tabs={['normal', 'material', 'amaterial', 'paneltitle']}>

          <Examples theme="normal"/>

          <Examples theme="material"/>

          <Examples theme="amaterial"/>

          <CodeExample title="PaneltitleStyle" code={ExamplePaneltitleStyleRaw}>
            <ExamplePaneltitleStyle/>
          </CodeExample>

        </TabbedView>
      </div>
    </TabbedView>
  ));
