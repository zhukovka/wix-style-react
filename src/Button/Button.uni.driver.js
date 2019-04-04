import button from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';
import { getStylableState } from '../../test/utils/stylable-uni-testkit';

export const buttonDriverFactory = base => {
  return {
    /** returns true if element in the DOM */
    exists: async () => await base.exists(),
    /** clicks on the button  */
    click: async () => await base.click(),
    /** returns button text */
    getButtonTextContent: async () => await base.text(),
    /** returns true if button is disabled */
    isButtonDisabled: async () => {
      const stylableState = await getStylableState(base, button, 'disabled');
      return stylableState === 'true';
    },
  };
};
