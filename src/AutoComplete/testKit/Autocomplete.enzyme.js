import {autocompleteDriverFactory} from './Autocomplete';

const autocompleteTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return autocompleteDriverFactory({component: component.node, wrapper});
};

export {autocompleteTestkitFactory};
