import React from 'react';
import { storySettings } from './storySettings';
import {
  header,
  tabs,
  tab,
  code as baseCode,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import { baseScope } from '../../utils/Components/LiveCodeExample';
import DateRangeInput from 'wix-style-react/DateRangeInput';

const code = config => baseCode({ components: baseScope, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: DateRangeInput,
  componentPath: '../../../src/DateRangeInput/DateRangeInput.js',

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
        'https://github.com/wix/wix-style-react/tree/master/src/DateRangeInput',
      component: (
        <div style={{ width: '50%' }}>
          <DateRangeInput
            value={new Date().toString()}
            dateFormat="DD/MM/YYYY"
          />
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
