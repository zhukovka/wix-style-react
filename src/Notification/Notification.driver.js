import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';
import ReactTestUtils from 'react-addons-test-utils';

const notificationDriverFactory = ({component, wrapper}) => {
  const notificationWrapperSelector = '[data-hook="notification-wrapper"]';
  const labelTextSelector = '[data-hook="notification-label"]';
  const actionButtonSelector = '[data-hook="notification-cta-button"]';
  const closeButtonSelector = '[data-hook="notification-close-button"]';

  const classExists = className => wrapper.querySelector(notificationWrapperSelector).classList.contains(className);

  return {
    exists: () => !!component,
    visible: () => !!wrapper.querySelector(notificationWrapperSelector),
    hasTheme: theme => classExists(`${theme}Theme`),
    isStandardNotification: () => classExists('standardTheme'),
    isErrorNotification: () => classExists('errorTheme'),
    isSuccessNotification: () => classExists('successTheme'),
    isWarningNotification: () => classExists('warningTheme'),
    isSmallSize: () => classExists('smallSize'),
    isBigSize: () => classExists('bigSize'),
    getLabelText: () => wrapper.querySelector(labelTextSelector).textContent,
    hasActionButton: () => !!wrapper.querySelector(actionButtonSelector),
    getActionButtonText: () => wrapper.querySelector(actionButtonSelector).textContent,
    hasCloseButton: () => !!wrapper.querySelector('[data-hook="notification-close-button"]'),
    isRelativelyPositioned: () => classExists('relativePosition'),
    isAbsolutePositioned: () => classExists('absolutePosition'),
    clickOnCloseButton: () => ReactTestUtils.Simulate.click(wrapper.querySelector(closeButtonSelector)),
    clickOnActionButton: () => ReactTestUtils.Simulate.click(wrapper.querySelector(actionButtonSelector)),
    getZIndex: () => Number(wrapper.querySelector(notificationWrapperSelector).style['z-index']),
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Notification {...props}/></div>, wrapper);
    }
  };
};

export default notificationDriverFactory;
