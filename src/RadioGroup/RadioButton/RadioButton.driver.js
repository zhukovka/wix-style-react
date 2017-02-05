import React from 'react';
import RadioButton from './RadioButton';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const radioButtonDriverFactory = ({component, wrapper}) => {
  const radioButton = component.childNodes[0];
  const label = component.childNodes[1];

  return {
    exists: () => !!component,
    check: () => ReactTestUtils.Simulate.change(radioButton),
    isChecked: () => radioButton.checked,
    isDisabled: () => radioButton.disabled,
    getLabel: () => label.textContent,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><RadioButton {...props}/></div>, wrapper);
    }
  };
};

export default radioButtonDriverFactory;
