import {dropdownDriverFactory} from './Dropdown';

const dropdownTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return dropdownDriverFactory({component: component.node, wrapper});
};

export {dropdownTestkitFactory};
