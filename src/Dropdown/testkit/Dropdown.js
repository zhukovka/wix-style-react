import React from 'react';
import Dropdown from '../Dropdown';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const dropdownDriverFactory = component => {

  const isClassExists = (component, className) => (component.className.indexOf(className) !== -1);
  const options = component.childNodes[0];
  const optionAt = position => (options.childNodes[position]);

  return {
    exists: () => !!component,
    isShown: () => isClassExists(options, 'shown'),
    isDown: () => isClassExists(options, 'down'),
    isUp: () => isClassExists(options, 'up'),
    tabIndex: () => component.tabIndex,
    optionsLength: () => options.childNodes.length,
    clickOptionAt: position => ReactTestUtils.Simulate.click(optionAt(position)),
    mouseEnterAtOption: position => ReactTestUtils.Simulate.mouseEnter(optionAt(position)),
    mouseLeaveAtOption: position => ReactTestUtils.Simulate.mouseLeave(optionAt(position)),
    mouseClickOutside: () => ReactTestUtils.Simulate.blur(options),
    isOptionHovered: position => isClassExists(optionAt(position), 'hovered'),
    isOptionSelected: position => isClassExists(optionAt(position), 'selected'),
    classes: () => options.className,
    pressDownKey: () => ReactTestUtils.Simulate.keyDown(component, {key: 'ArrowDown'}),
    pressUpKey: () => ReactTestUtils.Simulate.keyDown(component, {key: 'ArrowUp'}),
    pressEnterKey: () => ReactTestUtils.Simulate.keyDown(component, {key: 'Enter'}),
    pressEscKey: () => ReactTestUtils.Simulate.keyDown(component, {key: 'Escape'}),
    optionContentAt: position => optionAt(position).textContent,
    clickAtOption: position => ReactTestUtils.Simulate.click(optionAt(position)),
    isOptionADivider: position => isClassExists(optionAt(position), 'divider')
  };
};

const componentFactory = (props = {}) => {
  const {children, ...otherProps} = props;
  const component = ReactTestUtils.renderIntoDocument(<div><Dropdown {...otherProps}>{children}</Dropdown></div>);
  return component.childNodes[0];
};

const dropdownTestkitFactory = ({wrapper, id}) => {
  const dropdown = $(wrapper).find(`#${id}`)[0];
  return dropdownDriverFactory(dropdown);
};

export {dropdownTestkitFactory, componentFactory, dropdownDriverFactory};
