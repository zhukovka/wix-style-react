import _ from 'lodash/fp';

const autocompleteDriverFactory = ({component}) => ({
  element: () => component
});

const componentFactory = ({id}) => $(`#${id}`);

const protractorAutocompleteTestkitFactory = _.compose(autocompleteDriverFactory, componentFactory);

export {protractorAutocompleteTestkitFactory};
