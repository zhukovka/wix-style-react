import {dropdownDriverFactory} from './Dropdown';

const dropdownTestkitFactory = ({wrapper, id}) => {
  const dropdown = wrapper.find(`#${id}`);
  return dropdownDriverFactory(dropdown.node);
};

export {dropdownTestkitFactory};
