import { storySettings } from './storySettings';

import CalendarPanel from '..';
import CalendarPanelPlaygroundConfig from '../../../stories/components/CalendarPanel/CalendarPanelPlaygroundConfig';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CalendarPanel,
  componentPath: '..',

  ...CalendarPanelPlaygroundConfig({ dataHook: storySettings.dataHook }),
};
