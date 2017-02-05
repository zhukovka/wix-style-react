import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../Loader';

const loaderDriverFactory = ({component, wrapper}) => {
  const isClassExists = (component, className) => !!component && component.className.indexOf(className) !== -1;
  const text = component.childNodes[1];

  return {
    exists: () => !!component,
    isSmall: () => isClassExists(component, 'small'),
    isMedium: () => isClassExists(component, 'medium'),
    isLarge: () => isClassExists(component, 'large'),
    hasText: () => isClassExists(text, 'text'),
    getText: () => text.textContent,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Loader {...props}/></div>, wrapper);
    },
    component: () => component
  };
};

export default loaderDriverFactory;
