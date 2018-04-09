import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.protractor.driver';

const dropdownDriverFactory = component => {
  return inputWithOptionsDriverFactory(component);
};

export default dropdownDriverFactory;
