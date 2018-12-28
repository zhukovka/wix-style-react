import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const proportionDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    element: async () => base.getNative(),
  };
};
