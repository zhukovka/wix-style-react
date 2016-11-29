import 'react';
import styles from './Button.scss';
import ButtonDriver from './Button.driver';

describe('Button', () => {
  let driver;

  beforeEach(() => {
    driver = new ButtonDriver();
  });

  it('should click a button', () => {
    const onClick = jest.fn();

    driver
      .given.onClick(onClick)
      .when.created()
      .when.clicked();

    expect(onClick).toBeCalled();
  });

  it('should render children', () => {
    driver
      .given.children('<div>123</div>')
      .when.created();

    expect(driver.get.element().text()).toBe('<div>123</div>');
  });

  it('should get disabled class', () => {
    driver
      .given.disabled(true)
      .when.created();

    expect(driver.get.element().hasClass(styles.disabled)).toBe(true);
  });

  it('should have default "fullblue" style', () => {
    driver
      .when.created();

    expect(driver.get.element().hasClass(styles.fullblue)).toBe(true);
  });

  it('should get "small" height class', () => {
    driver
      .given.height(`${styles.small}`)
      .when.created();

    expect(driver.get.element().hasClass(`height${styles.small}`)).toBe(true);
  });

  it('should get "large" height class', () => {
    driver
      .given.height(`${styles.large}`)
      .when.created();

    expect(driver.get.element().hasClass(`height${styles.large}`)).toBe(true);
  });

  it('should get custom style', () => {
    const customStyle = 'emptyblue';

    driver
      .given.style(customStyle)
      .when.created();

    expect(driver.get.element().hasClass(styles[customStyle])).toBe(true);
  });

  it('should get "hover" class', () => {
    driver
      .given.hover()
      .when.created();

    expect(driver.get.element().hasClass(styles.hover)).toBe(true);
  });
});
