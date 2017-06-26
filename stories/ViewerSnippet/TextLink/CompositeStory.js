import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InteractiveCodeExample from '../../utils/Components/InteractiveCodeExample';
import TextLinkSnippet from './TextLinkSnippet';

storiesOf('Viewer', module)
  .add('TextLink Live Code', () => (
    <div>
      <h1>Text Link</h1>
      <InteractiveCodeExample title="Customize <TextLink/>">
        <TextLinkSnippet/>
      </InteractiveCodeExample>
    </div >
  ));
