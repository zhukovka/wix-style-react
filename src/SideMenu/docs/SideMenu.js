import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../README.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleStandardRTL from './ExampleStandardRTL';
import ExampleStandardRTLRaw from '!raw-loader!./ExampleStandardRTL';

import ExampleSubMenu from './ExampleSubMenu';
import ExampleSubMenuRaw from '!raw-loader!./ExampleSubMenu';

storiesOf('Components', module).add('SideMenu', () => (
  <div>
    <Markdown source={Readme} />

    <h1>Usage examples</h1>

    <CodeExample title="Standard" code={ExampleStandardRaw}>
      <ExampleStandard />
    </CodeExample>

    <CodeExample title="RTL Standard" code={ExampleStandardRTLRaw}>
      <ExampleStandardRTL />
    </CodeExample>

    <CodeExample title="Sub Menu" code={ExampleSubMenuRaw}>
      <ExampleSubMenu />
    </CodeExample>
  </div>
));
