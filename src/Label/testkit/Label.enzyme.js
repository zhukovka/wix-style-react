import {labelDriverFactory} from './Label';

const labelTestkitFactory = ({wrapper, id}) => {
  const label = wrapper.find(`#${id}`);
  return labelDriverFactory(label.node);
};

export {labelTestkitFactory};
