const buttonDriverFactory = component => ({
  click: () => component.click(),
  getButtonTextContent: () => component.getText(),
  isButtonDisabled: () => !!component.getAttribute('disabled'),
  isPrefixIconExists: () => component.$('[data-hook="btn-prefix"]').isPresent(),
  isSuffixIconExists: () => component.$('[data-hook="btn-suffix"]').isPresent(),
  element: () => component
});

export default buttonDriverFactory;
