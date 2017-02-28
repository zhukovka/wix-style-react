import React from 'react';
import ReactDOM from 'react-dom';

const componentFactory = Component => {
  let element;
  let componentInstance;

  const wrapperDiv = document.createElement('div');
  const ClonedComponent = React.cloneElement(Component, {ref: r => componentInstance = r});
  ReactDOM.render(<div ref={r => element = r}>{ClonedComponent}</div>, wrapperDiv);
  return {element: element.childNodes[0], wrapper: wrapperDiv, component: ClonedComponent, componentInstance};
};

export const createDriverFactory = driverFactory => element => driverFactory(componentFactory(element));

export const testkitFactoryCreator = driverFactory => ({wrapper, dataHook}) => {
  const element = wrapper.querySelector(`[data-hook='${dataHook}']`);
  return driverFactory({element, wrapper});
};

// enzyme
export const enzymeTestkitFactoryCreator = driverFactory => ({wrapper, dataHook}) => {
  const regexp = new RegExp(`^<[^>]+data-hook="${dataHook}"`);
  const component = wrapper.findWhere(n => !n.props().dataHook && (regexp).test(n.html()));
  return driverFactory({element: component.node, wrapper});
};

// protractor
export const protractorTestkitFactoryCreator = driverFactory => ({dataHook}) => driverFactory($(`[data-hook='${dataHook}']`));
