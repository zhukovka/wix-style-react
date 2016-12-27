import _ from 'lodash/fp';
import {componentFactory, buttonSelectionDriverFactory} from './testkit/ButtonSelection';

describe('ButtonSelection', () => {
  const createDriver = _.compose(buttonSelectionDriverFactory, componentFactory);
  const buttonsNames = ['A', 'B', 'C'];
  const onChange = jest.fn();

  it('should create three buttons with given names', () => {
    const props = {
      buttonsNames,
      onChange
    };

    const driver = createDriver(props);
    expect(driver.getButtonsNames()).toEqual(props.buttonsNames);
    expect(driver.getButtonsClasses()).toEqual(Array(3).fill('unselected'));
  });

  it('should select initial value', () => {
    const props = {
      buttonsNames,
      onChange,
      value: 'A',
    };

    const driver = createDriver(props);
    expect(driver.getSelectedButton()).toBe(props.value);
  });

  it('should select value', () => {
    const props = {
      buttonsNames,
      onChange,
    };

    const driver = createDriver(props);
    driver.selectByValue('B');

    expect(props.onChange).toBeCalledWith('B');
  });

  it('should call onChange when selecting a value that is different from the selected value', () => {
    const props = {
      buttonsNames,
      onChange,
      value: 'A'
    };

    const driver = createDriver(props);
    driver.selectByValue('B');

    expect(onChange.mock.calls.length).toBeGreaterThan(0);
  });

  it('should not call onChange when reselecting the selected value', () => {
    const onChange = jest.fn();
    const props = {
      buttonsNames,
      onChange,
      value: 'A'
    };

    const driver = createDriver(props);
    driver.selectByValue('A');

    expect(onChange.mock.calls.length).toBe(0);
  });

  it('should throw exception for unkown value', () => {
    const props = {
      buttonsNames,
      onChange,
      value: 'unknown value'
    };

    expect(() => createDriver(props)).toThrowError();
  });

  it('should update buttons names', () => {
    const props = {
      buttonsNames,
      onChange
    };

    const driver = createDriver(props);
    props.buttonsNames = ['DD', 'EE'];
    driver.setProps(props);

    expect(driver.getButtonsNames()).toEqual(props.buttonsNames);
  });
});
