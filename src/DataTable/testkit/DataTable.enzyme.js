import {tableDriverFactory} from './DataTable';

const tableTestkitFactory = ({wrapper, id}) => {
  const component = wrapper.find(`#${id}`);
  return tableDriverFactory({component: component.node, wrapper});
};

export {tableTestkitFactory};
