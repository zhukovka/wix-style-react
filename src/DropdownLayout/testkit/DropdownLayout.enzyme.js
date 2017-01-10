import {dropdownLayoutDriverFactory} from './DropdownLayout';

const dropdownLayoutTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return dropdownLayoutDriverFactory({component: component.node, wrapper});
};

export {dropdownLayoutTestkitFactory};
