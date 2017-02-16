import React from 'react';
import ReactDOM from 'react-dom';

const componentFactory = Element => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}>{Element}</div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

export const createDriverFactory = driverFactory => element => driverFactory(componentFactory(element));

export const testkitFactoryCreator = driverFactory => ({wrapper, dataHook}) => {
  const component = wrapper.querySelector(`[data-hook='${dataHook}']`);
  return driverFactory({component, wrapper});
};

// enzyme
export const enzymeTestkitFactoryCreator = driverFactory => ({wrapper, dataHook}) => {
  const regexp = new RegExp(`^<[^>]+data-hook="${dataHook}"`);
  const component = wrapper.findWhere(n => !n.props().dataHook && (regexp).test(n.html()));
  return driverFactory({component: component.node, wrapper});
};

// protractor
export const protractorTestkitFactoryCreator = driverFactory => ({dataHook}) => driverFactory($(`[data-hook='${dataHook}']`));
