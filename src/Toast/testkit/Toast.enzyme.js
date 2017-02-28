import {toastDriverFactory} from './Toast';

const toastTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return toastDriverFactory({element: component.node, wrapper});
};

export {toastTestkitFactory};
