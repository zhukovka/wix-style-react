import React from 'react';
import {shallow, mount} from 'enzyme';
import Input from './Input';
import styles from './Input.scss';

const inputDriverFactory = component => ({
  component: () => component,
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
  isFocusedStyle: () => component.find('input').hasClass(styles.focus),
  isHoveredStyle: () => component.find('input').hasClass(styles.hover),
  isFocus: () => document.activeElement === component.find('input').node,
  exists: () => component.find('input').length === 1
});

const componentFactory = () => {

  const createShallow = (props = {}) => {
    return shallow(
      <Input {...props}/>
    );
  };

  const createMount = (props = {}) => {
    return mount(
      <Input {...props}/>
    );
  };

  return {createShallow, createMount};
};

export {componentFactory, inputDriverFactory};
