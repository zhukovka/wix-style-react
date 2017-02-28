import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const buttonDriverFactory = ({element, wrapper, component}) => {
  const isClassExists = (element, className) => (element.className.indexOf(className) !== -1);

  return {
    exists: () => !!element,
    click: () => ReactTestUtils.Simulate.click(element),
    getButtonTextContent: () => element.textContent,
    isButtonDisabled: () => isClassExists(element, 'disabled'),
    isPrefixIconExists: () => element.innerHTML.indexOf('prefix') !== -1,
    isSuffixIconExists: () => element.innerHTML.indexOf('suffix') !== -1,
    doesComponentHasClass: className => element.className.indexOf(className) > 0,
    isComponentHovered: () => isClassExists(element, 'hover'),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default buttonDriverFactory;
