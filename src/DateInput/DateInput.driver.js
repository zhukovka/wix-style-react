import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const dateInputDriverFactory = base => {
  // TODO - replace this when uniDriver support is added to input
  const getInput = () => base.$('[data-hook="wsr-input"]');
  return {
    ...baseUniDriverFactory(base),
    getValue: () => getInput().value(),
    hasDateIcon: () => base.$('[data-hook="date-input-date-icon"]').exists(),
  };
};
