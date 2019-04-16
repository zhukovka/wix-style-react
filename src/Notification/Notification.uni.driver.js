import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const notificationUniDriverFactory = base => {
  const notificationWrapperSelector = '[data-hook="notification-wrapper"]';
  const labelTextSelector = '[data-hook="notification-label"]';
  const actionButtonSelector = '[data-hook="notification-cta-button"]';
  const closeButtonSelector = '[data-hook="notification-close-button"]';

  const classExists = className =>
    base.$(notificationWrapperSelector).hasClass(className);

  return {
    ...baseUniDriverFactory(base),
    visible: () => base.$(notificationWrapperSelector).exists(),
    hasTheme: theme => classExists(`${theme}Theme`),
    isStandardNotification: () => classExists('standardTheme'),
    isErrorNotification: () => classExists('errorTheme'),
    isSuccessNotification: () => classExists('successTheme'),
    isWarningNotification: () => classExists('warningTheme'),
    isPremiumNotification: () => classExists('premiumTheme'),
    isSmallSize: () => classExists('smallSize'),
    isBigSize: () => classExists('bigSize'),
    getLabelText: () => base.$(labelTextSelector).text(),
    hasActionButton: () => base.$(actionButtonSelector).exists(),
    getActionButtonText: () => base.$(actionButtonSelector).text(),
    hasCloseButton: () =>
      base.$('[data-hook="notification-close-button"]').exists(),
    isRelativelyPositioned: () => classExists('relativePosition'),
    isFixedPositioned: () => classExists('fixedPosition'),
    isAbsolutePositioned: () => classExists('absolutePosition'),
    clickOnCloseButton: () => base.$(closeButtonSelector).click(),
    clickOnActionButton: () => base.$(actionButtonSelector).click(),
    getZIndex: async () => {
      const style = await ReactBase(
        base.$(notificationWrapperSelector),
      ).getStyle();
      return Number(style['z-index']);
    },
  };
};
