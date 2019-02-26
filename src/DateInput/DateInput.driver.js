import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const dateInputDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
