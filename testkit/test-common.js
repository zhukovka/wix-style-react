import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {mount} from 'enzyme';

export const isTestkitExists = (Element, testkitFactory) => {
  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const elementToRender = React.cloneElement(Element, {dataHook});
  const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>{elementToRender}</div>));
  const testkit = testkitFactory({wrapper, dataHook});
  return testkit.exists();
};

export const isEnzymeTestkitExists = (Element, testkitFactory) => {
  const dataHook = 'myDataHook';
  const elementToRender = React.cloneElement(Element, {dataHook});
  const wrapper = mount(elementToRender);
  const testkit = testkitFactory({wrapper, dataHook});
  return testkit.exists();
};
