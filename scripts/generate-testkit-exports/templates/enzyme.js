/* eslint-disable no-unused-vars */
import {
  enzymeTestkitFactoryCreator,
  enzymeUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/enzyme';

import tooltipDriverFactory from '../src/Tooltip/Tooltip.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = obj => {
  const hasUpgrade = obj.wrapper.find('[data-hook="popover-element"]').length;

  return hasUpgrade
    ? enzymeUniTestkitFactoryCreator(tooltipNextDriverFactory)(obj)
    : enzymeTestkitFactoryCreator(tooltipDriverFactory)(obj);
};
