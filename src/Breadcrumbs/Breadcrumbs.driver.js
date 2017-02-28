import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const breadcrumbsDriverFactory = ({element, wrapper, component}) => {
  const items = element.querySelector(`[data-hook=breadcrumbs-items]`);
  const optionAt = position => (items.childNodes[position]);
  const isClassExists = (element, className) => !!(element.className.match(new RegExp('\\b' + className + '\\b')));

  return {
    exists: () => !!element,
    breadcrumbContentAt: position => optionAt(position).textContent,
    clickBreadcrumbAt: position => ReactTestUtils.Simulate.click(optionAt(position)),
    getActiveItemId: () => {
      const activeItem = element.querySelector('.active');
      return Array.from(activeItem.parentNode.children).indexOf(activeItem);
    },
    isLarge: () => isClassExists(element, 'large'),
    isMedium: () => isClassExists(element, 'medium'),
    isOnWhiteBackground: () => isClassExists(element, 'onWhiteBackground'),
    isOnGrayBackground: () => isClassExists(element, 'onGrayBackground'),
    getLabelClassList: position => optionAt(position).querySelector('label').className,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default breadcrumbsDriverFactory;

