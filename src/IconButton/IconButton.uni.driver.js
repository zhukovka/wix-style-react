import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import stylesheet from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';

export const iconButtonDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(stylesheet);

  return {
    ...baseUniDriverFactory(base),
    isButtonDisabled: async () =>
      (await stylableUtil.getStyeState(base, 'disabled')) === 'true',
  };
};
