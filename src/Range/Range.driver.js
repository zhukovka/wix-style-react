import inputDriverFactory from '../Input/Input.driver';

const rangeDriverFactory = ({ element }) => {
  const label = element.childNodes[0];
  const input = element.childNodes[1];
  return {
    ...inputDriverFactory({ element }),
    getInput: () => input,
    hasInput: () => input.childNodes[0].tagName.toLowerCase() === 'input',
    getLabel: () => label,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
  };
};

export default rangeDriverFactory;
