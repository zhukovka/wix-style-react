import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import ReactTestUtils from 'react-dom/test-utils';

const IconWithOptionsDriverFactory = ({element, wrapper}) => {
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({element: element.childNodes[1].childNodes[0], wrapper});

  const driver = {
    exists: () => !!element,
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(element),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element),
  };

  return {driver, dropdownLayoutDriver};
};

export default IconWithOptionsDriverFactory;
