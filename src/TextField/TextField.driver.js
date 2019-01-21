import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const textFieldDriverFactory = ({ element }) => {
  const input = element.querySelector('input.input');

  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element }),
    getInput: () => input,
    hasInput: () => !!input,
  };
};

export default textFieldDriverFactory;
