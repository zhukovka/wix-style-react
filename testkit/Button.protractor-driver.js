import {componentFactory, buttonDriverFactory} from '../test/e2e/Button/Button.driver';

const protractorButtonTestkitFactory = ({id}) => {
  const component = componentFactory({id});

  return buttonDriverFactory(component);
};

export {protractorButtonTestkitFactory};
