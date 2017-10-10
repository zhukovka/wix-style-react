import React from 'react';
import buttonDriverFactory from '../Backoffice/Button/Button.driver.js';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import ReactDOM from 'react-dom';

const ButtonWithOptionsDriverFactory = ({element, wrapper, component}) => {

  const buttonWrapper = element.childNodes[0];
  const buttonDriver = buttonDriverFactory({element: buttonWrapper.childNodes[0], wrapper: buttonWrapper});
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({element: element.childNodes[1], wrapper});

  const driver = {
    exists: () => !!element,
    outsideClick: () => document.body.dispatchEvent(new Event('click', {cancelable: true})),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
  return {driver, buttonDriver, dropdownLayoutDriver};
};

export default ButtonWithOptionsDriverFactory;
