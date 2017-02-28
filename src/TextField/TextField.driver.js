import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const textFieldDriverFactory = ({element, wrapper}) => {
  const input = element.childNodes[1];

  return {
    ...inputAreaWithLabelCompositeDriverFactory({element, wrapper}),
    getInput: () => input,
    hasInput: () => input.childNodes[0].tagName.toLowerCase() === 'input'
  };
};

export default textFieldDriverFactory;
