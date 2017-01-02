import _ from 'lodash/fp';

const dropdownDriverFactory = component => ({
});

const componentFactory = ({id}) => $(`#${id}`);

const protractorDropdownTestkitFactory = _.compose(dropdownDriverFactory, componentFactory);

export {protractorDropdownTestkitFactory};
