import _ from 'lodash/fp';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import styles from './Button.scss';
import {buttonTestkitFactory, componentFactory, buttonDriverFactory} from './testkit/Button';
import Button from './Button';

describe('Button', () => {

  const createDriver = _.compose(buttonDriverFactory, componentFactory);

  it('should click a button', () => {
    const onClick = jest.fn();

    const driver = createDriver({onClick});

    driver.click();

    expect(onClick).toBeCalled();
  });

  it('should render children', () => {
    const children = '<div>123</div>';

    const driver = createDriver({children});

    expect(driver.getButtonTextContent()).toBe('<div>123</div>');
  });

  it('should get disabled class', () => {
    const disabled = true;

    const driver = createDriver({disabled});

    expect(driver.isButtonDisabled()).toBe(true);
  });

  it('should have default "fullblue" style', () => {

    const driver = createDriver();

    expect(driver.doesComponentHasClass(styles.fullblue)).toBe(true);
  });

  it('should get "small" height class', () => {
    const height = `${styles.small}`;

    const driver = createDriver({height});

    expect(driver.doesComponentHasClass(`height${styles.small}`)).toBe(true);
  });

  it('should get "large" height class', () => {
    const height = `${styles.large}`;

    const driver = createDriver({height});

    expect(driver.doesComponentHasClass(`height${styles.large}`)).toBe(true);
  });

  it('should get custom style', () => {
    const theme = 'emptyblue';

    const driver = createDriver({theme});

    expect(driver.doesComponentHasClass(styles[theme])).toBe(true);
  });

  it('should get "hover" class', () => {
    const hover = true;

    const driver = createDriver({hover});

    expect(driver.isComponentHovered()).toBe(true);
  });
});

describe('testkit', () => {
  it('should create new driver', () => {
    const onClick = jest.fn();
    const div = document.createElement('div');
    const id = 'myId';

    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Button id={id} onClick={onClick}>{'123'}</Button></div>));

    const driver = buttonTestkitFactory({wrapper, id});
    driver.click();
    expect(onClick).toBeCalled();
  });
});
