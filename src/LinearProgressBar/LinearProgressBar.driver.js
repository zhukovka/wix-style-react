import { linearProgressBarDriverFactory as coreLinearProgressBarDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { tooltipDriverFactory } from 'wix-ui-backoffice/dist/src/components/Tooltip/Tooltip.driver';

const linearProgressBarDriverFactory = ({ element, eventTrigger, wrapper }) => {
  const createTooltipDriver = () =>
    tooltipDriverFactory({
      element: element.querySelector(
        `[data-hook='linear-progressbar-tooltip']`,
      ),
      wrapper,
      eventTrigger,
    });
  const coreProgressBarDriver = coreLinearProgressBarDriverFactory({
    element,
    wrapper,
    eventTrigger,
  });
  const errorIcon = () => element.querySelector(`[data-hook='error-icon']`);
  const successIcon = () => element.querySelector(`[data-hook='success-icon']`);

  return {
    ...coreProgressBarDriver,
    isTooltipShown: () => createTooltipDriver().isContentElementExists(),
    getTooltip: () => createTooltipDriver(),
    isErrorIconShown: () => !!errorIcon(),
    isSuccessIconShown: () => !!successIcon(),
  };
};

export default linearProgressBarDriverFactory;
