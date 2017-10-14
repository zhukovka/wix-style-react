import React from 'react';
import IconWithOptions from '../IconWithOptions';
import IconWithOptionsDriverFactory from './IconWithOptions.driver';
import {createDriverFactory} from '../test-common';
import {iconWithOptionsTestkitFactory} from '../../testkit';
import {iconWithOptionsTestkitFactory as enzymeIconWithOptionsTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

describe('IconWithOptions', () => {
  const createDriver = createDriverFactory(IconWithOptionsDriverFactory);

  const options = [
    {id: 0, value: 'Option 1'},
    {id: 1, value: 'Option 2'},
    {id: 2, value: 'Option 3', disabled: true},
    {id: 3, value: 'Option 4'},
    {id: 'divider1', value: '-'},
    {id: 'element1', value: <span style={{color: 'brown'}}>Option 4</span>}
  ];

  const optionsToArray = options => options.map(option => {
    const {value, ...props} = option;
    return <IconWithOptions.Option key={option.id} {...props}>{value}</IconWithOptions.Option>;
  });

  const iconWithOptions = props => (
    <IconWithOptions {...props}>
      <IconWithOptions.Icon/>
      {optionsToArray(options)}
    </IconWithOptions>
  );

  it('should have a Button and a hidden DropdownLayout by default', () => {
    const {driver, dropdownLayoutDriver} = createDriver(iconWithOptions());
    expect(driver.exists()).toBeTruthy();
    expect(dropdownLayoutDriver.exists()).toBeTruthy();
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should display dropdown only on mouse hover', () => {
    const {driver, dropdownLayoutDriver} = createDriver(iconWithOptions());
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    driver.mouseLeave();
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should hide the dropdown when an option gets selected', async () => {
    const {driver, dropdownLayoutDriver} = createDriver(iconWithOptions());
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    dropdownLayoutDriver.clickAtOption(0);
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should not hide the dropdown when selecting an option which is already selected', async () => {
    const {driver, dropdownLayoutDriver} = createDriver(iconWithOptions({selectedId: 0}));
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    dropdownLayoutDriver.clickAtOption(0);
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
  });

  it('should call onSelect when an option is clicked', () => {
    const onSelect = jest.fn();
    const {driver, dropdownLayoutDriver} = createDriver(iconWithOptions({onSelect}));
    driver.mouseEnter();
    dropdownLayoutDriver.clickAtOption(0);
    expect(onSelect).toBeCalledWith(options[0]);
  });

  it('should not call onSelect when a selected option is pressed', () => {
    const onSelect = jest.fn();
    const {driver, dropdownLayoutDriver} = createDriver(iconWithOptions({onSelect, selectedId: options[0].id}));
    driver.mouseEnter();
    dropdownLayoutDriver.clickAtOption(0);
    expect(onSelect).not.toBeCalled();
  });

  it('should have arrow in the dropdown by default', () => {
    const {driver, dropdownLayoutDriver} = createDriver(iconWithOptions());
    driver.mouseEnter();
    expect(dropdownLayoutDriver.hasTopArrow()).toBeTruthy();
  });

  it('should not have dropDirectin up by default', () => {
    const {dropdownLayoutDriver} = createDriver(iconWithOptions());
    expect(dropdownLayoutDriver.isDropDirectionUp()).toBe(false);
  });

  it('should have dropDirectin up', () => {
    const {dropdownLayoutDriver} = createDriver(iconWithOptions({dropDirectionUp: true}));
    expect(dropdownLayoutDriver.isDropDirectionUp()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(
        <div>
          <IconWithOptions dataHook={dataHook}>
            <IconWithOptions.Icon/>
            {optionsToArray(options)}
          </IconWithOptions>
        </div>
      ));
      const iconWithOptionsTestkit = iconWithOptionsTestkitFactory({wrapper, dataHook});
      expect(iconWithOptionsTestkit.driver.exists()).toBeTruthy();
      expect(iconWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(
        <IconWithOptions dataHook={dataHook}>
          <IconWithOptions.Icon/>
          {optionsToArray(options)}
        </IconWithOptions>
      );
      const iconWithOptionsTestkit = enzymeIconWithOptionsTestkitFactory({wrapper, dataHook});
      expect(iconWithOptionsTestkit.driver.exists()).toBeTruthy();
      expect(iconWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });
});
