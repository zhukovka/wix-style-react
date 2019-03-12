import React from 'react';
import { storySettings } from '../test/storySettings';
import {
  header,
  tabs,
  tab,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import DateRangeInput from 'wix-style-react/DateRangeInput';
import Input from 'wix-style-react/Input';
import { columns, importExample } from 'wix-storybook-utils/dist/src/Sections';
import * as examples from './examples';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: DateRangeInput,
  componentPath: '../DateRangeInput.js',

  componentProps: {
    dateFormat: 'DD/MM/YYYY',
    value: {
      from: new Date(),
      to: new Date(),
    },
  },

  exampleProps: {
    status: [
      { label: 'error', value: Input.StatusError },
      { label: 'loading', value: Input.StatusLoading },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/DateRangeInput',
      component: (
        <div style={{ width: '50%' }}>
          <DateRangeInput
            value={{ from: new Date(0), to: new Date() }}
            dateFormat="DD/MM/YYYY"
          />
        </div>
      ),
    }),
    columns([
      importExample({
        source: examples.importExample,
      }),
    ]),
    tabs({
      tabs: [
        ...[
          { title: 'API', sections: [api()] },
          { title: 'TestKit', sections: [testkit()] },
          { title: 'Playground', sections: [playground()] },
        ].map(tab),
      ],
    }),
  ],
};
