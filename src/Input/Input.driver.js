import React from 'react';
import {shallow} from 'enzyme';
import Input from './Input';
import styles from './Input.scss';

const driverFactory = component => ({
  trigger: (trigger, event) => component.find('input').simulate(trigger, event),
  getValue: () => component.find('input').props().value,
  getDefaultValue: () => component.find('input').props().defaultValue,
  getTabIndex: () => component.find('input').props().tabIndex,
  hasExclamation: () => component.find('Exclamation').length > 0,
  hasError: () => component.hasClass(styles.error),
  getUnit: () => component.find(`.${styles.unit}`).text(),
  hasMagnifyingGlass: () => component.find(`.${styles.magnifying_glass}`).length > 0,
  isRTL: () => component.hasClass(styles.rtl),
  hasEndWrapping: () => component.hasClass(styles.endpadding),
  isFocused: () => component.find('input').hasClass(styles.focus),
  isHovered: () => component.find('input').hasClass(styles.hover)
});

const componentFactory = () => {
  const createShallow = (props = {}) => {
    return shallow(
      <Input {...props}/>
    );
  };

  return {createShallow};
};

export {componentFactory, driverFactory};
