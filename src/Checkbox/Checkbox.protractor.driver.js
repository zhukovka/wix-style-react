const checkboxDriverFactory = component => ({
  click: () => component.click(),
  getLabel: () => component.$(`label`),
  getInput: () => component.$(`input`),
  isChecked: () => component.$(`input`).isSelected(),
  isDisabled: () => !component.$(`input`).isEnabled(),
  element: () => component
});

export default checkboxDriverFactory;
