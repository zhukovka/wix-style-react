import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const autoCompleteDriverFactory = ({component, wrapper}) => {
  const input = component.querySelector('input');

  return {
    ...inputAreaWithLabelCompositeDriverFactory({component, wrapper}),
    hasAutoComplete: () => !!input
  };
};

export default autoCompleteDriverFactory;
