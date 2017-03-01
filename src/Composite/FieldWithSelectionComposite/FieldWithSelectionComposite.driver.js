import React from 'react';
import FieldWithSelectionComposite from './FieldWithSelectionComposite';
import ReactDOM from 'react-dom';

function isLabel(element) {
  return element.tagName.toLowerCase() === 'label';
}

const fieldWithSelectionCompositeDriverFactory = ({element, wrapper}) => {
  const firstChild = element.childNodes[0].childNodes[0];
  const label = isLabel(firstChild) ? firstChild : null;
  const inputsWrapper = label ? element.childNodes[1] : element.childNodes[0];
  const textInput = label ? inputsWrapper.childNodes[0].childNodes[0] : inputsWrapper.childNodes[0].childNodes[0];
  const selectionInput = label ? inputsWrapper.childNodes[1].childNodes[0] : inputsWrapper.childNodes[1].childNodes[0];

  return {
    exists: () => !!element,
    getLabel: () => label.textContent,
    hasLabel: () => !!label,
    hasInput: () => textInput.tagName.toLowerCase() === 'input' || textInput.tagName.toLowerCase() === 'textarea',
    hasSelectionInput: () => !!selectionInput.tagName,
    getAttr: attrName => element.getAttribute(attrName),
    getNumberOfChildren: () => element.childElementCount,
    setProps: props => {
      ReactDOM.render(<div ref={r => element = r}><FieldWithSelectionComposite {...props}/></div>, wrapper);
    }
  };
};

export default fieldWithSelectionCompositeDriverFactory;
