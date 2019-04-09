import React from 'react';
import { header } from 'wix-storybook-utils/Sections';

import { Category } from '../../../stories/storiesHierarchy';
import CircularProgressBar from '..';

export default {
  category: Category.COMPONENTS,
  storyName: 'CircularProgressBar',

  component: CircularProgressBar,
  componentPath: '..',

  componentProps: {
    errorMessage: 'some error message',
    value: 20,
    size: 'medium',
    light: false,
    error: false,
    errorLabel: '',
    showProgressIndication: false,
  },

  exampleProps: {
    size: ['small', 'medium', 'large'],
  },

  sections: [
    header({
      component: (
        <div>
          <CircularProgressBar size="large" value={45} />
          <CircularProgressBar size="medium" value={45} />
          <CircularProgressBar size="small" value={45} />
        </div>
      ),
    }),
  ],
};
