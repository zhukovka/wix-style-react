import _ from 'lodash/fp';

const inputWithOptionsDriverFactory = ({component}) => ({
  element: () => component
});

const componentFactory = ({id}) => $(`#${id}`);

const protractorInputWithOptionsTestkitFactory = _.compose(inputWithOptionsDriverFactory, componentFactory);

export {protractorInputWithOptionsTestkitFactory};
