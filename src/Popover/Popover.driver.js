import { popoverDriverFactory as corePopoverDriverFactory } from 'wix-ui-core/drivers/vanilla';

const popoverDriverFactory = ({ element, eventTrigger }) => {
  return {
    ...corePopoverDriverFactory({ element, eventTrigger }),
  };
};

export default popoverDriverFactory;
