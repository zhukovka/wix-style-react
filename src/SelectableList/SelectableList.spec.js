import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import SelectableList from './SelectableList';
import { selectableListPrivateDriverFactory } from './SelectableList.driver.private';

import Checkbox from '../Checkbox';
import { checkboxTestkitFactory } from '../../testkit';

describe('SelectableList', () => {
  const dataHook1 = 'clicked-checkbox1';
  const dataHook2 = 'clicked-checkbox2';

  const createDriver = createUniDriverFactory(
    selectableListPrivateDriverFactory,
  );

  const renderSelectablelist = (props = {}) => (
    <SelectableList {...props}>
      <Checkbox dataHook={dataHook1} />
      <Checkbox dataHook={dataHook2} />
      <Checkbox />
    </SelectableList>
  );

  it('should render multiple children', async () => {
    const driver = createDriver(renderSelectablelist());
    expect(await driver.exists()).toBeTruthy();
  });

  it('`onSelect` should return selected component', async () => {
    const mockOnSelect = jest.fn();

    const driver = createDriver(
      renderSelectablelist({ onSelect: mockOnSelect }),
    );

    const element = await driver.element();

    const checkboxDriver = checkboxTestkitFactory({
      wrapper: element,
      dataHook: dataHook1,
    });

    checkboxDriver.click();

    const mockCallback = mockOnSelect.mock.calls[0][1];

    expect(mockCallback.props.dataHook).toBe(dataHook1);
  });

  it('`onDeselect` should return deselected component', async () => {
    const mockOnSelect = jest.fn();
    const mockOnDeselect = jest.fn();

    const driver = createDriver(
      renderSelectablelist({
        onSelect: mockOnSelect,
        onDeselect: mockOnDeselect,
      }),
    );

    const element = await driver.element();

    const checkboxDriver = checkboxTestkitFactory({
      wrapper: element,
      dataHook: dataHook1,
    });

    checkboxDriver.click();
    checkboxDriver.click();

    const mockonDeselectCallback = mockOnDeselect.mock.calls[0][1];

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockonDeselectCallback.props.dataHook).toBe(dataHook1);
  });

  it('`limit` prop should limit amount of clicked items', async () => {
    const mockOnSelect = jest.fn();

    const driver = createDriver(
      renderSelectablelist({
        onSelect: mockOnSelect,
        limit: 1,
      }),
    );

    const element = await driver.element();

    checkboxTestkitFactory({ wrapper: element, dataHook: dataHook1 }).click();
    checkboxTestkitFactory({ wrapper: element, dataHook: dataHook2 }).click();

    const mockOnSelectCallback = mockOnSelect.mock.calls[0][1];

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelectCallback.props.dataHook).toBe(dataHook1);
  });

  it('`trigger` prop should be used to trigger children state', async () => {
    const trigger = 'checked';

    const mockOnSelect = jest.fn();

    const driver = createDriver(
      renderSelectablelist({
        onSelect: mockOnSelect,
        trigger,
      }),
    );

    const element = await driver.element();

    const checkboxDriver = checkboxTestkitFactory({
      wrapper: element,
      dataHook: dataHook1,
    });

    checkboxDriver.click();

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(checkboxDriver.isChecked()).toBeTruthy();
  });
});
