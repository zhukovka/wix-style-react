const filePickerDriverFactory = component => ({
  click: () => component.click(),
  getInput: () => component.$(`input`),
  getSubLabel: () => component.$(`[data-hook="sub-label"]`).getText(),
  getMainLabel: () => component.$(`[data-hook="main-label"]`).getText(),
  element: () => component
});

export default filePickerDriverFactory;
