import {tagDriverFactory} from './Tag';

const tagTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return tagDriverFactory({component: component.node, wrapper});
};

export {tagTestkitFactory};
