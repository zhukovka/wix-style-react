import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const dateRangePickerDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () => base.$('[data-hook="dateRangePicker-count"]').text(),

    /** Click the button */
    clickButton: async () => base.$('[data-hook="dateRangePicker-button"]').click(),

    /** Get the button's text */
    getButtonText: async () => base.$('[data-hook="dateRangePicker-button"]').text(),
  };
};
