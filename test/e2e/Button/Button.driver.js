const buttonDriverFactory = component => ({
  click: () => component.click(),
  getButtonText: () => component.getText()
});

const componentFactory = ({id}) => $(`#${id}`);

export {buttonDriverFactory, componentFactory};
