import {buttonSelectionDriverFactory} from './ButtonSelection';

const buttonSelectionTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return buttonSelectionDriverFactory({component: component.node, wrapper});
};

export {buttonSelectionTestkitFactory};
