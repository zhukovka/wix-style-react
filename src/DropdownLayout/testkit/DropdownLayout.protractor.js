import _ from 'lodash/fp';

const dropdownLayoutDriverFactory = ({component}) => ({
  element: () => component
});

const componentFactory = ({id}) => $(`#${id}`);

const protractorDropdownLayoutTestkitFactory = _.compose(dropdownLayoutDriverFactory, componentFactory);

export {protractorDropdownLayoutTestkitFactory};
