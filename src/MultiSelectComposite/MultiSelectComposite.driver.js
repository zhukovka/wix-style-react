import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';
import multiSelectDriverFactory from '../MultiSelect/MultiSelect.driver';

const multiSelectCompositeDriverFactory = ({ element }) => {
  const multiSelect = element && Array.from(element.childNodes).slice(-1)[0];

  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element }),
    ...multiSelectDriverFactory({ element: multiSelect }),
  };
};

export default multiSelectCompositeDriverFactory;
