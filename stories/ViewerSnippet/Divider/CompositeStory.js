import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InteractiveCodeExample from '../../utils/Components/InteractiveCodeExample';
import DividerSnippet from './DividerSnippet';

storiesOf('Viewer', module)
  .add('Divider Live Code', () => (
    <div>
      <h1>Divider</h1>
      <InteractiveCodeExample title="Customize <Divider/>">
        <DividerSnippet/>
      </InteractiveCodeExample>
    </div>
  ));
