import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const textAreaDriverFactory = ({component, wrapper}) => {
  const inputArea = component.childNodes[1];
  return {
    ...inputAreaWithLabelCompositeDriverFactory({component, wrapper}),
    getInputArea: () => inputArea,
    hasInputArea: () => inputArea.childNodes[0].tagName.toLowerCase() === 'textarea'
  };
};

export default textAreaDriverFactory;
