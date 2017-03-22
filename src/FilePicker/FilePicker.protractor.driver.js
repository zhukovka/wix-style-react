const filePickerDriverFactory = component => ({
  click: () => component.click(),
  getInput: () => component.$(`input`),
  getImagePlaceholder: () => component.$(`.src-FilePicker-FilePicker__info__2Alfr`).getText(),
  element: () => component
});

export default filePickerDriverFactory;
