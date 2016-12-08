import {buttonDriverFactory} from '../src/Button/Button.driver';

const buttonTestkitFactory = ({wrapper, id}) => {
  //TODO: add support for other wrapper types by checking wrapper type here
  // Handle Enzyme wrapper:
  const button = wrapper.find(`#${id}`);
  return buttonDriverFactory(button);
};

export {buttonTestkitFactory};
