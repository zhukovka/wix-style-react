import { badgeDriverFactory } from 'wix-ui-backoffice/dist/src/components/Badge/Badge.driver';

import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import popoverDriverFactory from '../Popover/Popover.driver';

const badgeSelectDriverFactory = ({ element, eventTrigger }) => {
  const popoverDriver = popoverDriverFactory({ element, eventTrigger });

  const badgeDriver = badgeDriverFactory({
    element: popoverDriver.getTargetElement().childNodes[0],
    eventTrigger,
  });

  const driver = {
    /** Returns 'true' wether the element exists */
    exists: () => !!element,

    /** Click on an option */
    clickAtOption: index => {
      if (!popoverDriver.isContentElementExists()) {
        badgeDriver.click();
      }

      // Since the popover may be closed, we need to create the DropdownLayout driver every time
      const dropdownLayoutDriver = dropdownLayoutDriverFactory({
        element: element.querySelector(
          '[data-hook=badgeSelect-dropdownLayout]',
        ),
      });

      if (dropdownLayoutDriver.exists()) {
        dropdownLayoutDriver.clickAtOption(index);
      }
    },
  };

  return driver;
};

export default badgeSelectDriverFactory;
