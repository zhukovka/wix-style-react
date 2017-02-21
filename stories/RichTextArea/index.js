import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample';
import Markdown from '../utils/Components/Markdown';

import ReadMe from '../../src/RichTextArea/README.md';
import RichTextAreaExample from './RichTextAreaExample';

storiesOf('3. Inputs', module)
  .add('3.2b RichTextAreaExample', () => (
    <div>
      <Markdown source={ReadMe}/>
      <InteractiveCodeExample title="Customize a <RichTextArea/>">
        <RichTextAreaExample />
      </InteractiveCodeExample>
    </div>
  ));
