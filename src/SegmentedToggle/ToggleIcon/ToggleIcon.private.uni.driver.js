import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import stylesheet from './ToggleIcon.st.css';

export const toggleIconPrivateDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(stylesheet);
  const element = base.$('[data-hook="toggle-icon"]');
  const isSelected = async () =>
    (await stylableUtil.getStyleState(element, 'selected')) === 'true';

  return {
    exists: async () => await element.exists(),
    childExists: async selector => await element.$(selector).exists(),
    isSelected: async () => await isSelected(),
    click: async () => await element.click(),
  };
};
