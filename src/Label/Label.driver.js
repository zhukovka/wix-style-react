import React from 'react';
import ReactDOM from 'react-dom';

const labelDriverFactory = ({element, wrapper, component}) => {
  return {
    exists: () => !!element,
    getTagName: () => element.tagName.toLowerCase(),
    getLabelTextContent: () => element.textContent,
    getClassList: () => element.className,
    getAttr: attrName => element.getAttribute(attrName),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default labelDriverFactory;
