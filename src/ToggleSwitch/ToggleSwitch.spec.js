import 'react';
import ToggleSwitchDriver from './ToggleSwitch.driver';

describe('ToggleSwitch', () => {
  let driver;

  beforeEach(() => driver = new ToggleSwitchDriver());

  describe('checked attribute', () => {
    it('should pass down to input', () => {
      driver
        .given.checked(true)
        .when.created();

      expect(driver.get.checked()).toEqual(true);
    });

    it('should be default to false', () => {
      driver
        .when.created();

      expect(driver.get.checked()).toEqual(false);
    });
  });

  describe('onChange attribute', () => {
    it('should be called when the input is clicked', () => {
      const onChange = jest.fn();

      driver
        .given.onChange(onChange)
        .when.created();

      driver.when.changed();

      expect(onChange).toBeCalled();
    });
  });
});
