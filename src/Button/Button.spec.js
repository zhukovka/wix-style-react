import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';
import styles from './Button.scss';
import ButtonDriver from '../../testkit/Button';

describe('Button', () => {
  const actions = {
    onClickHandler: jest.fn()
  }

  const setup = (props, children) => {
    const wrapper = shallow(
      <Button id="my-button" onClick={actions.onClickHandler} {...props}>{children}</Button>
    );
    const driver = new ButtonDriver({id: 'my-button', find: selector => wrapper.find(selector)});
    return {wrapper, driver};
  };

  it('should click a button', () => {
    const {driver} = setup();
    driver.click();
    expect(actions.onClickHandler).toBeCalled();
  });

  it('should render children', () => {
    const {driver} = setup({}, '<div>123</div>');
    driver.click();
    expect(driver.element.text()).toBe('<div>123</div>');
  });

  it('should get disabled class', () => {
    const {driver} = setup({disabled: true});
    expect(driver.element.hasClass(styles.disabled)).toBe(true);
  });

  it('should have default "fullblue" style', () => {
    const {driver} = setup();
    expect(driver.element.hasClass(styles.fullblue)).toBe(true);
  });

  it('should get "small" height class', () => {
    const {driver} = setup({height: `${styles.small}`});
    expect(driver.element.hasClass(`height${styles.small}`)).toBe(true);
  });

  it('should get "large" height class', () => {
    const {driver} = setup({height: `${styles.large}`});
    expect(driver.element.hasClass(`height${styles.large}`)).toBe(true);
  });

  it('should get custom style', () => {
    const customStyle = 'emptyblue';
    const {driver} = setup({style: customStyle});
    expect(driver.element.hasClass(styles[customStyle])).toBe(true);
  });

  it('should get "hover" class', () => {
    const {driver} = setup({hover: true});
    driver.hover();
    expect(driver.element.hasClass(styles.hover)).toBe(true);
  });
});
