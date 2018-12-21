import React from 'react';
import ReactDOM from 'react-dom';
import inputDriverFactory from '../../Input/Input.driver';
import { iconButtonTestkitFactory } from '../../../testkit';

const editableRowDriverFactory = ({ element, wrapper, component }) => {
  const inputDriver = inputDriverFactory({
    element: element.querySelector('[data-hook="edit-row-input"]'),
    wrapper: element,
  });
  const approveBtnDriver = iconButtonTestkitFactory({
    wrapper: element,
    dataHook: 'edit-row-approve-button',
  });
  const cancelBtnDriver = iconButtonTestkitFactory({
    wrapper: element,
    dataHook: 'edit-row-cancel-button',
  });

  return {
    exists: () => !!element,
    isInputFocused: () => inputDriver.isFocus(),
    clickApprove: () => approveBtnDriver.click(),
    isApproveDisabled: () => approveBtnDriver.isButtonDisabled(),
    clickCancel: () => cancelBtnDriver.click(),
    getText: () => inputDriver.getValue(),
    setText: text => inputDriver.enterText(text),
    keyDown: keyCode => inputDriver.trigger('keyDown', { keyCode }),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      ReactDOM.render(
        <div ref={r => (element = r)}>{ClonedWithProps}</div>,
        wrapper,
      );
    },
  };
};

export default editableRowDriverFactory;
