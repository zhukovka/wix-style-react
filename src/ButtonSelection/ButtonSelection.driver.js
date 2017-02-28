import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const buttonSelectionDriverFactory = ({element, wrapper, component}) => {
  const $component = $(element);

  const getButtonsNames = () =>
    $component.find('span').map((index, b) => $(b).text()).toArray();

  const getButtonsClasses = () =>
    $component.find('span').map((index, b) => $(b).attr('class')).toArray();

  return {
    exists: () => !!element,
    getButtonsNames,
    getButtonsClasses,
    getSelectedButton: () => getButtonsNames()[getButtonsClasses().indexOf('selected')],
    selectByValue: value => {
      $component.find('span').each((index, b) => {
        if ($(b).text() === value) {
          ReactTestUtils.Simulate.click(b);
          return;
        }
      });
    },
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default buttonSelectionDriverFactory;
