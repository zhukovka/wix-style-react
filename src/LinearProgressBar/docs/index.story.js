import React from 'react';
import { header } from 'wix-storybook-utils/Sections';

import LinearProgressBar from '..';
import { Category } from '../../../stories/storiesHierarchy';

export default {
  category: Category.COMPONENTS,
  storyName: 'LinearProgressBar',

  component: LinearProgressBar,
  componentPath: '..',

  componentProps: {
    errorMessage: 'some error message',
    value: 20,
    light: false,
    error: false,
    showProgressIndication: false,
  },

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <LinearProgressBar value={45} showProgressIndication />
        </div>
      ),
    }),
  ],
};
