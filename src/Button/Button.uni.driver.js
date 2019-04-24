import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import stylesheet from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';

export const buttonDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(stylesheet);
  return {
    /** returns true if element in the DOM */
    exists: async () => await base.exists(),
    /** clicks on the button  */
    click: async () => await base.click(),
    /** returns button text */
    getButtonTextContent: async () => await base.text(),
    /** returns true if button is disabled */
    isButtonDisabled: async () => {
      const stylableState = await stylableUtil.getStyleState(base, 'disabled');
      return stylableState === 'true';
    },
  };
};
