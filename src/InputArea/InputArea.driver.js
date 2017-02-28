import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import styles from './InputArea.scss';
import $ from 'jquery';

const inputAreaDriverFactory = ({element, wrapper, component}) => {
  const $component = $(element);
  const textArea = $component.find('textarea')[0];

  return {
    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](textArea, event),
    focus: () => textArea.focus(),
    enterText: text => ReactTestUtils.Simulate.change(textArea, {target: {value: text}}),
    getValue: () => textArea.value,
    getPlaceholder: () => textArea.placeholder,
    getDefaultValue: () => textArea.defaultValue,
    getRowsCount: () => textArea.rows,
    getTabIndex: () => textArea.tabIndex,
    getReadOnly: () => textArea.readOnly,
    getResizable: () => element.classList.contains(styles.resizable),
    hasExclamation: () => $component.find(`.${styles.exclamation}`).length === 1,
    hasError: () => element.classList.contains(styles.hasError),
    isFocusedStyle: () => element.classList.contains(styles.hasFocus),
    isHoveredStyle: () => element.classList.contains(styles.hasHover),
    isOfStyle: style => element.classList.contains(styles[`theme-${style}`]),
    isFocus: () => document.activeElement === textArea,
    exists: () => !!textArea,
    hasIconLeft: () => !$component.find(`.${styles.prefix}`).is(':empty'),
    getStyle: () => textArea.style,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default inputAreaDriverFactory;
