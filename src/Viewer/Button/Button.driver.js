import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

const buttonDriverFactory = ({element, wrapper, component}) => {
  const isClassExists = (element, className) => element.className.indexOf(className) !== -1;

  return {
    exists: () => !!element,
    click: () => ReactTestUtils.Simulate.click(element),
    getButtonTextContent: () => element.textContent,
    doesComponentHasClass: className => isClassExists(element, className),
    hoverButton: () => ReactTestUtils.Simulate.mouseEnter(element),
    getStyle: () => element.style._values,
    isButtonDisabled: () => element.getAttribute('disabled') === '',
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default buttonDriverFactory;
