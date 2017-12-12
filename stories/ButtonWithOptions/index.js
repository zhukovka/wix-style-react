import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';

import Readme from '../../src/ButtonWithOptions/README.md';
import ExampleStandardComp from './ButtonWithOptionsStandard';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample/InteractiveCodeExample';
import ReadmeTestkit from '../../src/ButtonWithOptions/README.TESTKIT.md';

storiesOf('Core', module)
  .add('ButtonWithOptions', () => {
    return (
      <TabbedView tabs={['API', 'Testkit']}>
        <div>
          <Markdown source={Readme}/>
          <InteractiveCodeExample title="Customize a <ButtonWithOptions/>">
            <ExampleStandardComp/>
          </InteractiveCodeExample>
        </div>
        <div>
          <Markdown source={ReadmeTestkit}/>
        </div>
      </TabbedView>
    );
  });
