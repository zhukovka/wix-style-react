import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';

import styles from './styles.scss';

export const sectionHelperUniDriverFactory = base => {
  const actionButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="sectionhelper-action-btn"]'));
  const closeButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="sectionhelper-close-btn"]'));

  return {
    ...baseUniDriverFactory(base),
    titleText: () => base.$('[data-hook="sectionhelper-title"]').text(),
    actionText: () => actionButtonDriver().getButtonTextContent(),
    clickAction: () => actionButtonDriver().click(),
    clickClose: () => closeButtonDriver().click(),
    isCloseButtonDisplayed: () => closeButtonDriver().exists(),
    textContent: () => base.text(),
    isWarning: () => base.hasClass(styles.warning),
    isStandard: () => base.hasClass(styles.standard),
    isDanger: () => base.hasClass(styles.danger),
    isExperimentalDark: () => base.hasClass(styles.experimentalDark),
    isSuccess: () => base.hasClass(styles.success),
    isPremium: () => base.hasClass(styles.premium),
    isPreview: () => base.hasClass(styles.preview),
  };
};
