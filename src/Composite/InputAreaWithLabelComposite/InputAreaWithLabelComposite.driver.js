import React from 'react';
import InputAreaWithLabelComposite from './InputAreaWithLabelComposite';
import ReactDOM from 'react-dom';

const inputAreaWithLabelCompositeDriverFactory = ({component, wrapper}) => {
  const label = component.childNodes[0].childNodes[0];

  return {
    exists: () => !!component,
    getLabel: () => label.textContent,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
    getAttr: attrName => component.getAttribute(attrName),
    getNumberOfChildren: () => component.childElementCount,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><InputAreaWithLabelComposite {...props}/></div>, wrapper);
    }
  };
};

export default inputAreaWithLabelCompositeDriverFactory;
