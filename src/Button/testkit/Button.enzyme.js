import ReactDOM from 'react-dom';
import {buttonDriverFactory} from './Button';

const buttonTestkitFactory = ({wrapper, id}) => {
  const button = wrapper.find(`#${id}`);
  return buttonDriverFactory(ReactDOM.findDOMNode(button.component));
};

export {buttonTestkitFactory};
