import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Input from '../Input';
import styles from './Input.scss';
import $ from 'jquery';

const inputDriverFactory = ({component, wrapper}) => {
  const $component = $(component);
  const input = $component.find('input')[0];
  const innerDiv = $component.find('div')[0];
  const clearButton = $(component).find(`.${styles.clear_button}`);

  return {
    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](input, event),
    focus: () => input.focus(),
    clickClear: () => ReactTestUtils.Simulate.click(clearButton[0]),
    enterText: keys => {
      input.value = keys;
      ReactTestUtils.Simulate.change(input);
    },
    getValue: () => input.value,
    getDefaultValue: () => input.defaultValue,
    getTabIndex: () => input.tabIndex,
    getReadOnly: () => input.readOnly,
    hasExclamation: () => !!innerDiv && innerDiv.className.indexOf(styles.exclamation) >= 0,
    hasError: () => component.className.indexOf(styles.error) >= 0,
    getUnit: () => $component.find(`.${styles.unit}`)[0].textContent,
    hasMagnifyingGlass: () => !!innerDiv && innerDiv.className.indexOf(styles.magnifying_glass) >= 0,
    hasMenuArrow: () => !!innerDiv && innerDiv.className.indexOf(styles.menu_arrow) >= 0,
    hasClearButton: () => clearButton.length > 0,
    isRTL: () => component.className.indexOf(styles.rtl) >= 0,
    hasEndWrapping: () => component.className.indexOf(styles.endpadding) >= 0,
    isFocusedStyle: () => input.className.indexOf(styles.focus) >= 0,
    isHoveredStyle: () => input.className.indexOf(styles.hover) >= 0,
    isOfStyle: style => component.className.indexOf(styles[style]) >= 0,
    isOfSize: size => component.classList.contains(styles[`size-${size}`]),
    isFocus: () => document.activeElement === input,
    exists: () => $component.find('input').length > 0,
    hasIconLeft: () => component.className.indexOf(styles.iconLeft) >= 0,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Input {...props}/></div>, wrapper);
    }
  };
};


const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><Input {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const inputTestkitFactory = ({wrapper, id}) => {
  const component = $(wrapper).find(`#${id}`)[0];
  return inputDriverFactory({component, wrapper});
};

export {inputTestkitFactory, componentFactory, inputDriverFactory};
