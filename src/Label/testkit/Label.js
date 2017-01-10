import React from 'react';
import Label from '../Label';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const labelDriverFactory = component => {
  return {
    getTagName: () => component.tagName.toLowerCase(),
    getLabelTextContent: () => component.textContent,
    getClassList: () => component.className,
    getAttr: attrName => component.getAttribute(attrName)
  };
};

const componentFactory = (props = {}) => {
  const {children, ...otherProps} = props;
  const component = ReactTestUtils.renderIntoDocument(<div><Label {...otherProps}>{children}</Label></div>);
  return component.childNodes[0];
};

const labelTestkitFactory = ({wrapper, id}) => {
  const label = $(wrapper).find(`#${id}`)[0];
  return labelDriverFactory(label);
};

export {labelTestkitFactory, componentFactory, labelDriverFactory};
