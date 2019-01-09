import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import SelectableList from './SelectableList';
import { selectableListPrivateDriverFactory } from './SelectableList.driver.private';

import Checkbox from '../Checkbox';
import { checkboxTestkitFactory } from '../../testkit';

describe('SelectableList', () => {
  const createDriver = createUniDriverFactory(
    selectableListPrivateDriverFactory,
  );

  it('should render multiple children', async () => {
    const driver = createDriver(
      <SelectableList>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </SelectableList>,
    );
    expect(await driver.exists()).toBeTruthy();
  });

  it('`onSelect` should return selected component', async () => {
    const dataHook = 'clicked-checkbox';

    const mockOnSelect = jest.fn();

    const driver = createDriver(
      <SelectableList onSelect={mockOnSelect} selectTrigger="checked">
        <Checkbox />
        <Checkbox />
        <Checkbox dataHook={dataHook} />
      </SelectableList>,
    );

    const element = await driver.element();

    const checkboxDriver = checkboxTestkitFactory({
      wrapper: element,
      dataHook: dataHook,
    });

    await checkboxDriver.click();

    const mockCallback = mockOnSelect.mock.calls[0][1];

    expect(mockCallback.props.dataHook).toBe(dataHook);
  });

  it('`onDeselect` should return DeSelected component', async () => {
    const dataHook = 'clicked-checkbox';

    const mockOnSelect = jest.fn();
    const mockOnDeselect = jest.fn();

    const driver = createDriver(
      <SelectableList
        onSelect={mockOnSelect}
        onDeselect={mockOnDeselect}
        selectTrigger="checked"
      >
        <Checkbox />
        <Checkbox />
        <Checkbox dataHook={dataHook} />
      </SelectableList>,
    );

    const element = await driver.element();

    const checkboxDriver = checkboxTestkitFactory({
      wrapper: element,
      dataHook: dataHook,
    });

    checkboxDriver.click();
    checkboxDriver.click();

    const mockonDeselectCallback = mockOnDeselect.mock.calls[0][1];

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockonDeselectCallback.props.dataHook).toBe(dataHook);
  });

  it('`threshold` prop should limit amount of clicked items', async () => {
    const dataHook1 = 'clicked-checkbox1';
    const dataHook2 = 'clicked-checkbox2';

    const mockOnSelect = jest.fn();

    const driver = createDriver(
      <SelectableList
        threshold={1}
        onSelect={mockOnSelect}
        selectTrigger="checked"
      >
        <Checkbox />
        <Checkbox dataHook={dataHook1} />
        <Checkbox dataHook={dataHook2} />
      </SelectableList>,
    );

    const element = await driver.element();

    const checkboxDriver1 = checkboxTestkitFactory({
      wrapper: element,
      dataHook: dataHook1,
    });

    const checkboxDriver2 = checkboxTestkitFactory({
      wrapper: element,
      dataHook: dataHook2,
    });

    checkboxDriver1.click();
    checkboxDriver2.click();

    const mockOnSelectCallback = mockOnSelect.mock.calls[0][1];

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelectCallback.props.dataHook).toBe(dataHook1);
  });
});
