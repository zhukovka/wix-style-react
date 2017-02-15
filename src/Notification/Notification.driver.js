import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';
import ReactTestUtils from 'react-addons-test-utils';

const notificationDriverFactory = ({component, wrapper}) => {
  const classExists = className => wrapper.querySelector('[data-hook="notification-wrapper"]').classList.contains(className);

  return {
    exists: () => !!component,
    visible: () => !!wrapper.querySelector('[data-hook="notification-wrapper"]'),
    isStandardNotification: () => classExists('standardTheme'),
    isErrorNotification: () => classExists('errorTheme'),
    isSuccessNotification: () => classExists('successTheme'),
    isWarningNotification: () => classExists('warningTheme'),
    isSmallSize: () => classExists('smallSize'),
    isBigSize: () => classExists('bigSize'),
    getLabelText: () => wrapper.querySelector('[data-hook="notification-label"]').textContent,
    hasActionButton: () => !!wrapper.querySelector('[data-hook="notification-cta-button"]'),
    getActionButtonText: () => wrapper.querySelector('[data-hook="notification-cta-button"]').textContent,
    hasCloseButton: () => !!wrapper.querySelector('[data-hook="notification-close-button"]'),
    isRelativelyPositioned: () => classExists('relativePosition'),
    isAbsolutePositioned: () => classExists('absolutePosition'),
    clickOnCloseButton: () => ReactTestUtils.Simulate.click(wrapper.querySelector('[data-hook="notification-close-button"]')),
    getZIndex: () => Number(wrapper.querySelector('[data-hook="notification-wrapper"]').style['z-index']),
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Notification {...props}/></div>, wrapper);
    }
  };
};

export default notificationDriverFactory;
