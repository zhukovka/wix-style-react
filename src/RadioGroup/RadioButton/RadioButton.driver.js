import ReactTestUtils from 'react-dom/test-utils';

const radioButtonDriverFactory = ({ element }) => {
  const radioButton = element.childNodes[0];
  const label = element.childNodes[1];

  return {
    exists: () => !!element,
    check: () => ReactTestUtils.Simulate.change(radioButton),
    isChecked: () => radioButton.checked,
    isDisabled: () => radioButton.disabled,
    getLabel: () => label.textContent,
    getContent: () =>
      element.querySelector('[data-hook="radio-button-content"]'),
  };
};

export default radioButtonDriverFactory;
