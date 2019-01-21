import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';
import dropdownDriverFactory from '../Dropdown/Dropdown.driver';

const dropdownCompositeDriverFactory = ({ element }) => {
  const dropdown = element && Array.from(element.childNodes).slice(-1)[0];

  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element }),
    dropdownLayoutDriver: dropdownDriverFactory({
      element: dropdown,
      wrapper: dropdown,
    }).dropdownLayoutDriver,
  };
};

export default dropdownCompositeDriverFactory;
