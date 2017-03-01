import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.protractor.driver';

const rangeDriverFactory = component => ({
  ...inputAreaWithLabelCompositeDriverFactory(component),
  getInputArea: () => component.find('textarea')
});

export default rangeDriverFactory;
