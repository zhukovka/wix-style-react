const labelDriverFactory = component => ({
  click: () => component.click(),
  getLabelText: () => component.getText(),
  getAssociatedInput: () => component.getAttribute('for').then(id => $(`#${id}`)),
  getClassList: () => component.getAttribute('class'),
  element: () => component
});

export default labelDriverFactory;
