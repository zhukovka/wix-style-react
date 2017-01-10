import _ from 'lodash/fp';

const tagDriverFactory = ({component}) => ({
  element: () => component
});

const componentFactory = ({id}) => $(`#${id}`);

const protractorTagTestkitFactory = _.compose(tagDriverFactory, componentFactory);

export {protractorTagTestkitFactory};
