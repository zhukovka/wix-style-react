import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';

const textAreaDriverFactory = ({ element }) => {
  const inputArea = element.childNodes[1];
  return {
    ...inputAreaWithLabelCompositeDriverFactory({ element }),
    getInputArea: () => inputArea,
    hasInputArea: () =>
      inputArea.childNodes[0].childNodes[0].tagName.toLowerCase() ===
      'textarea',
  };
};

export default textAreaDriverFactory;
