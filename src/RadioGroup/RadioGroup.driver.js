import React from 'react';
import RadioGroup from './RadioGroup';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import toArray from 'lodash.toarray';

const radioGroupDriverFactory = ({component, wrapper}) => {
  const isClassExists = (component, className) => !!component && component.className.indexOf(className) !== -1;
  const radios = toArray(component.children) || [];
  const radioButtons = radios.map(radio => radio.childNodes[0]);
  const labels = radios.map(radio => radio.childNodes[1]);
  const selectedRadio = radios.find(radio => radio.childNodes[0].checked);
  const getRadioByValue = value => radioButtons.find(radioButton => radioButton.value === value.toString());

  return {
    exists: () => !!component,
    selectByValue: value => ReactTestUtils.Simulate.change(getRadioByValue(value)),
    selectByIndex: index => ReactTestUtils.Simulate.change(radioButtons[index]),
    getSelectedValue: () => selectedRadio ? Number(selectedRadio.childNodes[0].value) : null,
    getClassOfLabelAt: index => labels[index].className,
    isVerticalDisplay: () => isClassExists(component, 'vertical'),
    isHorizontalDisplay: () => isClassExists(component, 'horizontal'),
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><RadioGroup {...props}/></div>, wrapper);
    },
  };
};

export default radioGroupDriverFactory;
