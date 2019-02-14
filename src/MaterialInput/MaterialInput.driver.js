import inputDriverFactory from '../Input/Input.driver';

const materialInputDriverFactory = ({ element }) => {
  const inputDriver = inputDriverFactory({
    element: element.querySelector('[data-hook="base-input"]'),
    wrapper: element,
  });

  return {
    ...inputDriver,
    anyUniqueDriverFunctionForThisComponent: () => {},
  };
};

export default materialInputDriverFactory;
