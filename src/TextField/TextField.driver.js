import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const textFieldDriverFactory = ({component, wrapper}) => {
  const input = component.childNodes[1];

  return {
    ...inputAreaWithLabelCompositeDriverFactory({component, wrapper}),
    getInput: () => input,
    hasInput: () => input.childNodes[1].tagName.toLowerCase() === 'input'
  };
};

export default textFieldDriverFactory;
