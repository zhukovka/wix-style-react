import {buttonDriverFactory} from './Button';

const buttonTestkitFactory = ({wrapper, id}) => {
  const button = wrapper.find(`#${id}`);
  return buttonDriverFactory(button.node);
};

export {buttonTestkitFactory};
