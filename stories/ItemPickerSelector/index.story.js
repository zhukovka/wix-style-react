import React from 'react';

import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Card from 'wix-style-react/Card';

import { storySettings } from './storySettings';
import { storiesOf } from '@storybook/react';

import { Example } from './Example';
import { ExampleRaw } from '!raw-loader!./Example';

import Readme from './README.md';

storiesOf(storySettings.kind, module).add(
  storySettings.storyName ,
  () => (
    <div>
      <Markdown source={Readme}/>
      <div>
        <CodeExample title="Item picker selector as contact picker example" code={ExampleRaw}>
          <Card>
            <Example/>
          </Card>
        </CodeExample>
      </div>
    </div>
  ),
);
