import _ from 'lodash/fp';

const dropdownDriverFactory = component => ({
  element: () => component
});

const componentFactory = ({id}) => $(`#${id}`);

const protractorDropdownTestkitFactory = _.compose(dropdownDriverFactory, componentFactory);

export {protractorDropdownTestkitFactory};
