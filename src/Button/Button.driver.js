import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import button from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';
import { getStylableState } from '../../test/utils/stylable-uni-testkit';

export const buttonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    getButtonTextContent: async () => await base.text(),
    isButtonDisabled: async () => {
      const stylableState = await getStylableState(base, button, 'disabled');
      return stylableState === 'true';
    },
  };
};
