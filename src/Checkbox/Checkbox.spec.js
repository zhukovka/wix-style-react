import 'react';
import styles from './Checkbox.scss';
import CheckboxDriver from './Checkbox.driver';

describe('Checkbox', () => {
  let driver;

  beforeEach(() => {
    driver = new CheckboxDriver();
  });

  it('should click a Checkbox', () => {
    const onChange = jest.fn();
    driver
      .given.onChange(onChange)
      .when.created()
      .when.changed();

    expect(onChange).toBeCalled();
  });

  it('should have correct class after checked/unchecked', () => {
    let checked = false;
    const onChange = jest.fn(() => {
      checked = !checked;
      driver.get.element().setProps({checked});
    });

    driver
      .given.onChange(onChange)
      .when.created();

    expect(driver.get.element().find(`.${styles.wrapper}`).hasClass(styles.checked)).toBe(false);
    expect(driver.get.element().find(`.${styles.wrapper}`).hasClass(styles.unchecked)).toBe(true);

    driver.when.changed();

    expect(driver.get.element().find(`.${styles.wrapper}`).hasClass(styles.checked)).toBe(true);

    driver.when.changed();

    expect(driver.get.element().find(`.${styles.wrapper}`).hasClass(styles.checked)).toBe(false);
    expect(driver.get.element().find(`.${styles.wrapper}`).hasClass(styles.unchecked)).toBe(true);
  });
});
