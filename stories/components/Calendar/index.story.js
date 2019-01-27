import { storySettings } from './storySettings';
import Calendar from '../../../src/Calendar';

import playgroundStoryConfig from './CalendarPlaygroundConfig';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Calendar,
  componentPath: '../../../src/Calendar',
  ...playgroundStoryConfig,
};
