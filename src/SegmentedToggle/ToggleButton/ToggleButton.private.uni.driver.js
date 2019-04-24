import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import stylesheet from './ToggleButton.st.css';

export const toggleButtonPrivateDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(stylesheet);

  const isSelected = async () =>
    (await stylableUtil.getStyleState(base, 'selected')) === 'true';

  return {
    exists: async () => await base.exists(),
    getToggleText: async () => await base.text(),
    prefixExists: async () => await base.$('[data-hook="prefix"]').exists(),
    childExists: async selector => await base.$(selector).exists(),
    isSelected: async () => await isSelected(),
    click: async () => await base.click(),
    getNative: async () => await base.getNative(),
  };
};
