import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import stylesheet from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';

export const closeButtonDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(stylesheet);
  return {
    ...baseUniDriverFactory(base),
    isButtonDisabled: async () =>
      (await stylableUtil.getStyleState(base, 'disabled')) === 'true',
  };
};
