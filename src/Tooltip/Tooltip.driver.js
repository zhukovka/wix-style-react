import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';

const tooltipDriverFactory = ({element, wrapper}) => {
  return {
    isShown: () => !!document.body.querySelector('.tooltip'),
    focus: () => ReactTestUtils.Simulate.focus(element),
    blur: () => ReactTestUtils.Simulate.blur(element),
    click: () => ReactTestUtils.Simulate.click(element),
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(element),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element),
    hasErrorTheme: () => !!document.body.querySelector('.error'),
    hasDarkTheme: () => !!document.body.querySelector('.dark'),
    hasLightTheme: () => !!document.body.querySelector('.light'),
    getTooltipWrapper: () => document.body.querySelector('.tooltip'),
    getChildren: () => element.innerHTML,
    getContent: () => {
      let content = document.body.querySelector('.tooltip');
      while (content.children.length > 0) {
        content = content.children[0];
      }
      return content.innerHTML;
    },
    setProps: props => {
      ReactDOM.render(<div ref={r => element = r}><Tooltip {...props}/></div>, wrapper);
    }
  };
};

export default tooltipDriverFactory;
