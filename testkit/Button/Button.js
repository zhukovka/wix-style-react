import {buttonDriverFactory} from '../../src/Button/Button.driver';

const buttonTestkitFactory = ({wrapper, id}) => {
  const button = wrapper.find(`#${id}`);
  return buttonDriverFactory(button);
};

export {buttonTestkitFactory};
