import React from 'react';
import ReactDOM from 'react-dom';

const componentFactory = Element => {
  let component;
  let componentInstance;
  const wrapperDiv = document.createElement('div');
  const ClonedElement = React.cloneElement(Element, {ref: r => componentInstance = r});
  ReactDOM.render(<div ref={r => component = r}>{ClonedElement}</div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv, componentInstance};
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
