import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import button from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';
import { getStylableState } from '../../test/utils/stylable-uni-testkit';

export const closeButtonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    isButtonDisabled: async () =>
      (await getStylableState(base, button, 'disabled')) === 'true',
  };
};
