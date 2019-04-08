import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { ReactBase } from '../../test/utils/unidriver';

import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const dropdownBaseDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const reactBase = ReactBase(base);
  const getTargetElement = () => byDataHook('popover-element');
  const getContentElement = () => byDataHook('popover-content');

  const createDropdownLayoutDriver = () => dropdownLayoutDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    /** Returns the native target element */
    clickTargetElement: () => getTargetElement().click(),

    /** Returns `true` if the dropdown is being shown */
    isDropdownShown: async () => await getContentElement().exists(),

    /** Select a specific option (requires the DropdownBase to be opened) */
    selectOption: async index =>
      createDropdownLayoutDriver().clickAtOption(index),

    /** Click outside of the component */
    clickOutside: () => ReactBase.clickDocument(),

    mouseEnter: () => base.hover(),
    mouseLeave: () => reactBase.mouseLeave(),
  };
};
