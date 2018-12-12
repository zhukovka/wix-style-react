import { popoverDriverFactory as corePopoverDriverFactory } from 'wix-ui-core/dist/src/components/popover/Popover.protractor.driver';

const popoverDriverFactory = component => {
  return {
    ...corePopoverDriverFactory(component),
  };
};

export default popoverDriverFactory;
