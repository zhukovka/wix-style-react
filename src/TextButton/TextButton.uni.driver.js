import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import button from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';

export const textButtonDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(button);
  return {
    ...baseUniDriverFactory(base),
    getButtonTextContent: async () => await base.text(),
    isButtonDisabled: async () =>
      (await stylableUtil.getStyleState(base, 'disabled')) === 'true',
  };
};
