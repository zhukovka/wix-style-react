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

  describe('size attribute', () => {
    it('should create a large toggle by default', () => {
      driver.when.created();
      expect(driver.get.isXSmall()).toEqual(false);
      expect(driver.get.isSmall()).toEqual(false);
      expect(driver.get.isLarge()).toEqual(true);
    });
    it('should create a small toggle once given size', () => {
      driver.given.size('small');
      driver.when.created();
      expect(driver.get.isXSmall()).toEqual(false);
      expect(driver.get.isSmall()).toEqual(true);
      expect(driver.get.isLarge()).toEqual(false);
    });
    it('should create a x-small toggle once given size', () => {
      driver.given.size('x-small');
      driver.when.created();
      expect(driver.get.isXSmall()).toEqual(true);
      expect(driver.get.isSmall()).toEqual(false);
      expect(driver.get.isLarge()).toEqual(false);
    });
  });

});
