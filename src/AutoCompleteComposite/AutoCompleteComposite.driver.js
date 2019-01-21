import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const autoCompleteDriverFactory = ({ element }) => {
  const input = element.querySelector('input');

  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element }),
    hasAutoComplete: () => !!input,
  };
};

export default autoCompleteDriverFactory;
