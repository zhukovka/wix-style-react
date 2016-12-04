import {componentFactory, radioGroupDriverFactory} from './RadioGroup.driver';
import _ from 'lodash/fp';

describe('RadioGroup', () => {
  const {createShallow, createMount} = componentFactory([{value: 0}, {value: 1}, {value: 2}]);

  const createDriver = _.compose(radioGroupDriverFactory, createShallow);
  const createMountDriver = _.compose(radioGroupDriverFactory, createMount);
  const noop = () => {};

  it('should check the option that matches the initial value', () => {
    const value = 2;
    const driver = createMountDriver({value, onChange: noop});

    expect(driver.getSelectedValue()).toEqual(value);
    expect(driver.radioAt(2).node.checked).toEqual(true);

  });

  it('should not check any options if value was not matched', () => {
    const value = 10;
    const driver = createDriver({value, onChange: noop});

    driver.allRadios().forEach(node =>
      expect(node.props().checked).toEqual(false)
    );
  });

  it('should call onChange with the correct option value', () => {
    const value = 10;
    const onChange = jest.fn();

    const driver = createMountDriver({value, onChange});
    driver.selectByValue(1);

    expect(onChange).toBeCalledWith(1);
  });

  // it('should change the matched options as the value changes', () => {
  //   const value = 0;
  //   driver
  //     .given.onChange(setProps)
  //     .given.value(0)
  //
  //     .when.created();
  //
  //   driver
  //     .when.element(1).isChanged();
  //
  //   expect(driver.get.radioAt(1).props().checked).toEqual(true);
  // });
  //
  // it('should have a different class based on the vAlign attribute', () => {
  //   driver
  //     .given.onChange(setProps)
  //     .given.options([{value: 0, vAlign: 'center'}, {value: 1, vAlign: 'top'}])
  //     .when.created();
  //
  //   expect(driver.get.labelAt(0).hasClass(styles.vcenter)).toEqual(true);
  //   expect(driver.get.labelAt(1).hasClass(styles.vtop)).toEqual(true);
  // });
});
