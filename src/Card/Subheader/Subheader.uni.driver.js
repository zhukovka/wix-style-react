import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const subheaderDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    /** Get the title text */
    title: async () => base.$('[data-hook="title"]').text(),
    /** Get the title node */
    titleNode: async () => base.$('[data-hook="title-node"]'),
    /** Get the suffix node */
    suffix: async () => base.$('[data-hook="suffix"]'),
  };
};
