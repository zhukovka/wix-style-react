import {protractorTestkitFactoryCreator} from '../test-common';
import rangeWithLabelCompositeDriverFactory from '../Composite/RangeInputWithLabelComposite/RangeInputWithLabelComposite.protractor.driver';
import inputDriver from '../Input/Input.protractor.driver';

const inputDriverFactory = protractorTestkitFactoryCreator(inputDriver);

const rangeDriverFactory = component => {
  const inputDriverFirst = () => inputDriverFactory({dataHook: 'first-item'});
  const inputDriverLast = () => inputDriverFactory({dataHook: 'last-item'});

  return ({
    ...rangeWithLabelCompositeDriverFactory(component),
    inputType: {
      isFocusedFirst: () => inputDriverFirst().isFocused(),
      isFocusedLast: () => inputDriverLast().isFocused(),
      clickFirst: () => inputDriverFirst().click(),
      clickLast: () => inputDriverLast().click()
    }
  });
};

export default rangeDriverFactory;
