import React from 'react';
import {storiesOf} from '@storybook/react';

import AutoDocs from '../utils/Components/AutoDocs';
import AutoExample from '../utils/Components/AutoExample';
import TabbedView from '../utils/Components/TabbedView';

import ColorPicker from 'wix-style-react/ColorPicker';
import ColorPickerSource from '!raw-loader!wix-style-react/ColorPicker/color-picker';

storiesOf('Core', module)
  .add('ColorPicker', () => (
    <TabbedView tabs={['Usage', 'API']}>
      <AutoExample
        component={ColorPicker}
        source={ColorPickerSource}
        />

      <AutoDocs source={ColorPickerSource}/>
    </TabbedView>
  ));
