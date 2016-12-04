import 'react';
import {componentFactory, driverFactory} from './Checkbox.driver';
import _ from 'lodash/fp';

describe('Checkbox', () => {
  const {createShallow} = componentFactory();

  const createDriver = _.compose(driverFactory, createShallow);

  it('should click a Checkbox', () => {
    const checked = false;
    const onChange = jest.fn();

    const driver = createDriver({onChange, checked});

    driver.change();

    expect(onChange).toBeCalled();
  });

  it('should have correct class after checked/unchecked', () => {
    let checked = false;

    const component = createShallow({onChange: jest.fn(() => {
      checked = !checked;
      component.setProps({checked});
    })});

    const driver = driverFactory(component);

    expect(driver.isChecked()).toBe(false);

    driver.change();

    expect(driver.isChecked()).toBe(true);

    driver.change();

    expect(driver.isChecked()).toBe(false);
  });
});
