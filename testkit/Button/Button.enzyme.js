import ReactDOM from 'react-dom';
import {buttonDriverFactory} from '../../src/Button/Button.driver';

const buttonTestkitFactory = ({wrapper, id}) => {
  const button = wrapper.find(`#${id}`);
  return buttonDriverFactory(ReactDOM.findDOMNode(button.component));
};

export {buttonTestkitFactory};
