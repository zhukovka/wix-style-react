import _ from 'lodash/fp';

const buttonDriverFactory = component => ({
  click: () => component.click(),
  getButtonText: () => component.getText(),
  element: () => component
});

const componentFactory = ({id}) => $(`#${id}`);

const protractorButtonTestkitFactory = _.compose(buttonDriverFactory, componentFactory);

export {protractorButtonTestkitFactory};
