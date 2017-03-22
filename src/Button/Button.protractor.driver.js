const buttonDriverFactory = component => ({
  click: () => component.click(),
  getButtonTextContent: () => component.getText(),
  element: () => component
});

export default buttonDriverFactory;
