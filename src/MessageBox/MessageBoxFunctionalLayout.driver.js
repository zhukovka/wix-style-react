import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const messageBoxFunctionalLayoutDriverFactory = ({element, wrapper, component}) => {
  const confirmationButton = () => element.querySelector('[data-hook="confirmation-button"]');
  const cancellationButton = () => element.querySelector('[data-hook="cancellation-button"]');

  return {
    exists: () => !!(element),
    getConfirmationButtonText: () => confirmationButton().textContent,
    clickOnConfirmationButton: () => ReactTestUtils.Simulate.click(confirmationButton()),
    getCancellationButton: cancellationButton,
    getCancellationButtonText: () => cancellationButton().textContent,
    clickOnCancellationButton: () => ReactTestUtils.Simulate.click(cancellationButton()),
    isThemeExist: theme => !!element.querySelector(`.${theme}`),
    getFooter: () => element.querySelector('[data-hook="message-box-footer"]'),
    getTitle: () => element.querySelector('[data-hook="header-layout-title"]').textContent,
    getChildBySelector: selector => element.querySelector(selector),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default messageBoxFunctionalLayoutDriverFactory;
