import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const modalDriverFactory = ({element, wrapper, component}) => {

  const getPortal = () => document.body.querySelector('.portal');
  const getOverlay = () => document.body.querySelector('.ReactModal__Overlay');
  const getContent = () => document.body.querySelector('.ReactModal__Content');

  return {
    exists: () => !!(getPortal()) && !!element,
    isOpen: () => !!(getContent()),
    isThemeExist: theme => !!getPortal().querySelector(`.${theme}`),
    getChildBySelector: selector => getPortal().querySelector(selector),
    isScrollable: () => !getPortal().classList.contains('portalNonScrollable'),
    clickOnOverlay: () => {
      const overlay = getOverlay();
      ReactTestUtils.Simulate.mouseDown(overlay);
      ReactTestUtils.Simulate.mouseUp(overlay);
    },
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default modalDriverFactory;
