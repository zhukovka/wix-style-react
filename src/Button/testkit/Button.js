import React from 'react';
import Button from '../Button';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const buttonDriverFactory = component => {
  const isClassExists = (component, className) => (component.className.indexOf(className) !== -1);

  return {
    click: () => ReactTestUtils.Simulate.click(component),
    getButtonTextContent: () => component.textContent,
    isButtonDisabled: () => isClassExists(component, 'disabled'),
    doesComponentHasClass: className => component.className.indexOf(className) > 0,
    isComponentHovered: () => isClassExists(component, 'hover'),
    exists: () => !!component
  };
};

const componentFactory = (props = {}) => {
  const {children, ...otherProps} = props;
  const component = ReactTestUtils.renderIntoDocument(<div><Button {...otherProps}>{children}</Button></div>);
  return component.childNodes[0];
};

const buttonTestkitFactory = ({wrapper, id}) => {
  const button = $(wrapper).find(`#${id}`)[0];
  return buttonDriverFactory(button);
};

export {buttonTestkitFactory, componentFactory, buttonDriverFactory};
