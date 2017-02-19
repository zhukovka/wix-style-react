import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import TextLink from '../TextLink';

const buttonDriverFactory = ({component, wrapper}) => {

  return {
    exists: () => !!component,
    getContent: () => component.textContent,
    doesComponentHasClass: className => component.className.indexOf(className) > 0,
    isDarkBackground: () => component.style._values.color === 'rgb(255, 255, 255)',
    hover: () => ReactTestUtils.Simulate.mouseEnter(component),
    getLink: () => component.href,
    isUnderline: () => component.style._values['text-decoration'] === 'underline',
    isLightBackground: () => component.style._values.color === 'rgb(56, 153, 236)',
    getSize: () => component.classList.contains('t1_3') ? 'medium' : component.classList.contains('t3_3') ? 'small' : 'unknown',
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><TextLink {...props}/></div>, wrapper);
    }
  };
};

export default buttonDriverFactory;
