import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const boxDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
