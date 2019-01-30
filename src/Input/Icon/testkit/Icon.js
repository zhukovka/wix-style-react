import React from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Icon';

const iconDriverFactory = ({ element }) => {
  return {
    isEmpty: () => element.children.length === 0,
    hasChild: style => !!element.querySelector(style),
  };
};

const componentFactory = (props = {}) => {
  let element;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(
    <div ref={r => (element = r)}>
      <Icon {...props} />
    </div>,
    wrapperDiv,
  );
  return { element: element.childNodes[0], wrapper: wrapperDiv };
};

const iconTestkitFactory = ({ wrapper, dataHook }) => {
  const element = wrapper.querySelector(`[data-hook='${dataHook}']`);
  return iconDriverFactory({ element, wrapper });
};

export { iconTestkitFactory, componentFactory, iconDriverFactory };
