import Button from 'wix-style-react/Button';

import { storySettings } from './storySettings';

import icons from '../../utils/icons-for-story';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: Button,
  componentPath: '../../../src/Backoffice/Button',

  componentProps: {
    theme: 'fullblue',
    children: 'Click Me',
    dataHook: 'storybook-button',
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    prefixIcon: icons,
    suffixIcon: icons,
  },
};
