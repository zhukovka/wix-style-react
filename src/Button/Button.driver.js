import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

const buttonDriverFactory = component => ({
  click: () => component.simulate('click'),
  getButtonChildren: () => component.text(),
  isButtonDisabled: () => component.hasClass('disabled'),
  doesComponentHasClass: className => component.hasClass(className),
  isComponentHovered: () => component.hasClass('hover'),
  exists: () => component.find('button').length === 1
});

const componentFactory = () => {
  const createShallow = (props = {}) => {
    const {children, ...otherProps} = props;
    return shallow(
      <Button {...otherProps}>{children}</Button>
    );
  };

  return {createShallow};
};

export {componentFactory, buttonDriverFactory};
