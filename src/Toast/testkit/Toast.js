import React from 'react';
import ReactDOM from 'react-dom';
import Toast from '../Toast';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const byDataHook = hook => `[data-hook|="${hook}"]`;

const toastDriverFactory = ({element}) => {
  const $component = $(element);

  const styleStringToObj = input =>
    input //"key1: value1;key2: value2;"
      .replace(' ', '')
      .split(';')
      .filter(val => val !== '')
      .reduce((result, next) => {
        const [k, v] = next.split(':');
        result[k] = v;
        return result;
      }, {});

  return {
    hasId: id => $component.attr('id') === id,
    getToastText: () => $component.find(byDataHook('toast-text')).text(),
    clickOnClose: () => ReactTestUtils.Simulate.click($component.find(byDataHook('toast-close'))[0]),
    hasTheme: theme => $component.hasClass(theme),
    toastExists: () => $component.parent().find(byDataHook('toast')).length > 0,
    getTopProperty: () => styleStringToObj($component.attr('style')).top,
    hasLocation: location => $component.get(0).classList.contains(location)
  };
};

const componentFactory = (props = {}) => {
  let element;
  const {children, ...otherProps} = props;
  const wrapperDiv = document.createElement('div');

  ReactDOM.render(<div ref={r => element = r}><Toast {...otherProps}>{children}</Toast></div>, wrapperDiv);

  return {element: element.childNodes[0], wrapper: wrapperDiv};
};

const toastTestkitFactory = ({wrapper, id}) => {
  const element = $(wrapper).find(`#${id}`)[0];
  return toastDriverFactory({element, wrapper});
};

export {toastTestkitFactory, componentFactory, toastDriverFactory};
