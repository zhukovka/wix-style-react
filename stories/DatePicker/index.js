import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../utils/Components/Markdown';
import AutoDocs from '../utils/Components/AutoDocs';
import DatePickerSource from '!raw-loader!wix-style-react/DatePicker/DatePicker';
import TabbedView from '../utils/Components/TabbedView';
import Readme from '../../src/DatePicker/README.md';
import ReadmeTestkit from '../../src/DatePicker/README.TESTKIT.md';
import moment from 'moment';

import DatePicker from 'wix-style-react/DatePicker';
import AutoExample from '../utils/Components/AutoExample';

storiesOf('Core', module)
  .add('DatePicker', () => (
    <TabbedView tabs={['Usage', 'API', 'TestKit']}>
      <div>
        <Markdown source={Readme}/>

        <AutoExample
          component={DatePicker}
          source={DatePickerSource}
          componentProps={setProps => ({
            onChange: value => setProps({value}),
            dateFormat: 'YYYY/MM/DD',
            dataHook: 'storybook-datepicker',
            value: moment('2017/01/01')
          })}
          />
      </div>

      <AutoDocs source={DatePickerSource}/>

      <Markdown source={ReadmeTestkit}/>
    </TabbedView>
  ));
