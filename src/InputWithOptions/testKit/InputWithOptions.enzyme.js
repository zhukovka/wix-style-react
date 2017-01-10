import {inputWithOptionsDriverFactory} from './InputWithOptions';

const inputWithOptionsTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return inputWithOptionsDriverFactory({component: component.node, wrapper});
};

export {inputWithOptionsTestkitFactory};
