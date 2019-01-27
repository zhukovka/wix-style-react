import { storySettings } from './storySettings';

import CalendarPanel from '../../../src/CalendarPanel';
import CalendarPanelPlaygroundConfig from './CalendarPanelPlaygroundConfig';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CalendarPanel,
  componentPath: '../../../src/CalendarPanel/CalendarPanel.js',

  ...CalendarPanelPlaygroundConfig({ dataHook: storySettings.dataHook }),
};
