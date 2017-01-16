import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Breadcrumbs from '../Breadcrumbs';

const breadcrumbsDriverFactory = ({component, wrapper}) => {
  const items = component.querySelector(`[data-hook=breadcrumbs-items]`);
  const optionAt = position => (items.childNodes[position]);
  const isClassExists = (component, className) => !!(component.className.match(new RegExp('\\b' + className + '\\b')));

  return {
    breadcrumbContentAt: position => optionAt(position).textContent,
    clickBreadcrumbAt: position => ReactTestUtils.Simulate.click(optionAt(position)),
    getActiveItemId: () => {
      const activeItem = component.querySelector('.active');
      return Array.from(activeItem.parentNode.children).indexOf(activeItem);
    },
    isLarge: () => isClassExists(component, 'large'),
    isMedium: () => isClassExists(component, 'medium'),
    isOnWhiteBackground: () => isClassExists(component, 'onWhiteBackground'),
    isOnGrayBackground: () => isClassExists(component, 'onGrayBackground'),
    getLabelClassList: position => optionAt(position).querySelector('label').className,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Breadcrumbs {...props}/></div>, wrapper);
    }
  };
};

const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><Breadcrumbs {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

export {
  componentFactory,
  breadcrumbsDriverFactory
};
