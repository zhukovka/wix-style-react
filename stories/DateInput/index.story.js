import React from 'react';
import { storySettings } from './storySettings';
import {
  header,
  divider,
  tabs,
  tab,
  code as baseCode,
  description,
  importExample,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import { baseScope } from '../utils/Components/LiveCodeExample';
import DateInput from 'wix-style-react/DateInput';

const code = config => baseCode({ components: baseScope, ...config });

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: DateInput,
  componentPath: '../../src/DateInput/DateInput.js',

  componentProps: {
    theme: 'normal',
  },

  componentProps: {
    dateFormat: 'DD/MM/YYYY',
    value: new Date().toString(),
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/DateInput',
      component: (
        <div style={{ width: '50%' }}>
          <DateInput value={new Date().toString()} dateFormat="DD/MM/YYYY" />
        </div>
      ),
    }),
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
