import React, {Children} from 'react';
import TextField from '../TextField';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const textFieldDriverFactory = component => ({
  getLabel: () => $('label', component).get(0),
  getInput: () => $('input', component).get(0),
  getAttr: attrName => component.getAttribute(attrName),
  getNumberOfChildren: () => component.childElementCount
});


const componentFactory = (props = {}) => {
  let {children, ...otherProps} = props;
  children = Children.toArray(children.props.children);

  const component = ReactTestUtils.renderIntoDocument(<div><TextField {...otherProps}>{children}</TextField></div>);
  return component.childNodes[0];
};

const textFieldTestkitFactory = ({wrapper, dataHook}) => {
  const textField = $(wrapper).find(`[data-hook="${dataHook}"]`)[0];
  return textFieldDriverFactory(textField);
};

export {textFieldTestkitFactory, componentFactory, textFieldDriverFactory};
