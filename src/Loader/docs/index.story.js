import { Category } from '../../../stories/storiesHierarchy';

import Loader from '..';

export default {
  category: Category.COMPONENTS,
  storyName: 'Loader',

  component: Loader,
  componentPath: '..',

  componentProps: {
    dataHook: 'storybook-loader',
    status: 'loading',
    statusMessage: 'some message here',
    text: '',
  },
};
