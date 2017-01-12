import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Unit from '../Unit';

const unitDriverFactory = ({component}) => {
  return {
    isEmpty: () => component.children.length === 0,
    hasChild: style => !!component.querySelector(style)
  };
};


const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><Unit {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const unitTestkitFactory = ({wrapper, dataHook}) => {
  const component = $(wrapper).find(`[data-hook='${dataHook}']`);
  return unitDriverFactory({component, wrapper});
};

export {unitTestkitFactory, componentFactory, unitDriverFactory};
