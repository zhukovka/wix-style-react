import React from 'react';
import Button from './Button';
import ReactTestUtils from 'react-addons-test-utils';

const buttonDriverFactory = component => ({
  click: () => ReactTestUtils.Simulate.click(component),
  getButtonTextContent: () => component.textContent,
  isButtonDisabled: () => component.className.indexOf('disabled') > 0,
  doesComponentHasClass: className => component.className.indexOf(className) > 0,
  isComponentHovered: () => component.className.indexOf('hover') > 0,
  exists: () => component.find('button').length === 1
});

const componentFactory = (props = {}) => {
  const {children, ...otherProps} = props;
  const component = ReactTestUtils.renderIntoDocument(<div><Button {...otherProps}>{children}</Button></div>);
  return component.childNodes[0];
  //return ReactTestUtils.findRenderedDOMComponentWithClass(component, 'button');
};

export {componentFactory, buttonDriverFactory};
