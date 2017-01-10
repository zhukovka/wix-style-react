import React from 'react';
import Dropdown from '../Dropdown';
import {inputWithOptionsDriverFactory} from '../../InputWithOptions/testKit/InputWithOptions';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const dropdownDriverFactory = inputWithOptionsDriverFactory;

const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><Dropdown {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const dropdownTestkitFactory = ({wrapper, id}) => {
  const component = $(wrapper).find(`#${id}`)[0];
  return dropdownDriverFactory({component, wrapper});
};

export {dropdownTestkitFactory, componentFactory, dropdownDriverFactory};
