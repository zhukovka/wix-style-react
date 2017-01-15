import React from 'react';
import ReactDOM from 'react-dom';
import ButtonSelection from './ButtonSelection';
import ReactTestUtils from 'react-addons-test-utils';
import _ from 'lodash';
import $ from 'jquery';


const buttonSelectionDriverFactory = ({component, wrapper}) => {
  const $component = $(component);

  const getButtonsNames = () =>
    $component.find('span').map((index, b) => $(b).text()).toArray();

  const getButtonsClasses = () =>
    $component.find('span').map((index, b) => $(b).attr('class')).toArray();

  return {
    exists: () => !!component,
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
      ReactDOM.render(<div ref={r => component = r}><ButtonSelection {...props}/></div>, wrapper);
    }
  };
};

export default buttonSelectionDriverFactory;
