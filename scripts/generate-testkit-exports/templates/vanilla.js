/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom';

import {
  testkitFactoryCreator,
  uniTestkitFactoryCreator,
} from 'wix-ui-test-utils/vanilla';

import tooltipDriverFactory from '../src/Tooltip/Tooltip.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = obj => {
  const domInstance = ReactDOM.findDOMNode(obj.wrapper);
  const hasUpgrade = domInstance.querySelector(
    `[data-hook="${obj.dataHook}"] [data-hook="popover-element"]`,
  );

  return hasUpgrade
    ? uniTestkitFactoryCreator(tooltipNextDriverFactory)(obj)
    : testkitFactoryCreator(tooltipDriverFactory)(obj);
};
