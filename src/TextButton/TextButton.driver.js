import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import button from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';
import { getStylableState } from '../../test/utils/stylable-uni-testkit';

export const textButtonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    getButtonTextContent: async () => await base.text(),
    isButtonDisabled: async () =>
      (await getStylableState(base, button, 'disabled')) === 'true',
  };
};
