import { StylableDOMUtil } from '@stylable/dom-test-kit';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import button from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';

export const closeButtonDriverFactory = base => {
  const stylableDOMUtil = new StylableDOMUtil(button);
  return {
    ...baseUniDriverFactory(base),
    isButtonDisabled: async () =>
      stylableDOMUtil.getStyleState(await base.getNative(), 'disabled') ===
      'true',
  };
};
