import _ from 'lodash/fp';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {dropdownTestkitFactory, componentFactory, dropdownDriverFactory} from './testkit/Dropdown';
import Dropdown from './Dropdown';

describe('Dropdown', () => {

  const createDriver = _.compose(dropdownDriverFactory, componentFactory);
  const options = [
    {value: 0, text: 'Option 1'},
    {value: 1, text: 'Option 2'},
    {value: 2, text: 'Option 3'},
    {value: 3, text: 'Option 4'},
    {value: 'divider1', text: '-'},
    {value: 'element1', text: <span style={{color: 'brown'}}>Option 4</span>}
  ];

  it('should have a default of visible and drop down', () => {
    const driver = createDriver({options});
    expect(driver.isShown()).toBeTruthy();
    expect(driver.isDown()).toBeTruthy();
  });

  it('should have a tab index', () => {
    const driver = createDriver({options});
    expect(driver.tabIndex()).toBe(1);
  });

  it('should have an options', () => {
    const driver = createDriver({options});
    expect(driver.optionsLength()).toBe(6);

    expect(driver.optionContentAt(0)).toBe('Option 1');
    expect(driver.isOptionADivider(4)).toBeTruthy();
    expect(driver.optionContentAt(5)).toBe('Option 4');
  });

  it('should hover when mouse enter and unhover when mouse leave', () => {
    const driver = createDriver({options});
    driver.mouseEnterAtOption(0);
    expect(driver.isOptionHovered(0)).toBeTruthy();
    driver.mouseLeaveAtOption(0);
    expect(driver.isOptionHovered(0)).toBeFalsy();
  });

  it('should have only one hovered option', () => {
    const driver = createDriver({options});
    driver.mouseEnterAtOption(0);
    expect(driver.isOptionHovered(0)).toBeTruthy();
    driver.mouseEnterAtOption(1);
    expect(driver.isOptionHovered(0)).toBeFalsy();
    expect(driver.isOptionHovered(1)).toBeTruthy();
  });

  it('should hovered items cyclic and skipping divider on down key', () => {
    const driver = createDriver({options});
    driver.mouseEnterAtOption(0);
    driver.pressDownKey();
    expect(driver.isOptionHovered(1)).toBeTruthy();
    driver.pressDownKey();
    expect(driver.isOptionHovered(2)).toBeTruthy();
    driver.pressDownKey();
    expect(driver.isOptionHovered(3)).toBeTruthy();
    driver.pressDownKey();
    expect(driver.isOptionHovered(5)).toBeTruthy();
    driver.pressDownKey();
    expect(driver.isOptionHovered(0)).toBeTruthy();
  });

  it('should hovered items cyclic and skipping divider on up key', () => {
    const driver = createDriver({options});
    driver.mouseEnterAtOption(0);
    driver.pressUpKey();
    expect(driver.isOptionHovered(5)).toBeTruthy();
    driver.pressUpKey();
    expect(driver.isOptionHovered(3)).toBeTruthy();
    driver.pressUpKey();
    expect(driver.isOptionHovered(2)).toBeTruthy();
    driver.pressUpKey();
    expect(driver.isOptionHovered(1)).toBeTruthy();
    driver.pressUpKey();
    expect(driver.isOptionHovered(0)).toBeTruthy();
  });

  it('should call onClose when esc key is pressed', () => {
    const onClose = jest.fn();
    const driver = createDriver({options, onClose});
    driver.mouseEnterAtOption(0);
    driver.pressEscKey();
    expect(onClose).toBeCalled();

  });

  it('should call onClose when component is blur key is pressed', () => {
    const onClose = jest.fn();
    const driver = createDriver({options, onClose});
    driver.mouseEnterAtOption(0);
    driver.mouseClickOutside();
    expect(onClose).toBeCalled();
  });

  it('should call select when clicking on an option', () => {
    const onSelect = jest.fn();
    const driver = createDriver({options, onSelect});
    driver.clickAtOption(0);
    expect(onSelect).toBeCalledWith(0);
    driver.clickAtOption(5);
    expect(onSelect).toBeCalledWith('element1');
  });

  it('should select the chosen value', () => {
    const value = 0;
    const driver = createDriver({options, value});
    expect(driver.isOptionSelected(0)).toBeTruthy();
  });

  describe('testkit', () => {
    it('should create new driver', () => {
      const div = document.createElement('div');
      const id = 'myId';

      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Dropdown id={id} options={options}/>
      </div>));

      const driver = dropdownTestkitFactory({wrapper, id});
      expect(driver.optionsLength()).toBe(6);
    });
  });
});
