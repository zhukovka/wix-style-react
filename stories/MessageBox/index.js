import React from 'react';
import {storiesOf} from '@storybook/react';
import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/MessageBox/README.md';
import ReadmeTestKit from '../../src/MessageBox/README.TESTKIT.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

const introduction = `# Message Box
Components to be used within \`wix-style-react/Modal\`:

* \`<MessageBoxMarketerialLayout/>\`
* \`<MessageBoxFunctionalLayout/>\`
`;

storiesOf('9. Modals', module)
  .add('MessageBox', () => (
    <TabbedView tabs={['Usage', 'API', 'TestKits']}>
      <div>
        <Markdown source={introduction}/>

        <CodeExample
          autoExpand
          title="Code Example"
          code={ExampleStandardRaw}
          children={<ExampleStandard/>}
          />
      </div>

      <Markdown source={Readme}/>

      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  ));
