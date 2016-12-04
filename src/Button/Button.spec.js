import styles from './Button.scss';
import {componentFactory, buttonDriverFactory} from './Button.driver';
import _ from 'lodash/fp';

describe('Button', () => {
  const {createShallow} = componentFactory();

  const createDriver = _.compose(buttonDriverFactory, createShallow);

  it('should click a button', () => {
    const onClick = jest.fn();

    const driver = createDriver({onClick});
    driver.click();

    expect(onClick).toBeCalled();
  });

  it('should render children', () => {
    const children = '<div>123</div>';

    const driver = createDriver({children});

    expect(driver.getButtonChildren()).toBe('<div>123</div>');
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
    const style = 'emptyblue';

    const driver = createDriver({style});

    expect(driver.doesComponentHasClass(styles[style])).toBe(true);
  });

  it('should get "hover" class', () => {
    const hover = true;

    const driver = createDriver({hover});

    expect(driver.isComponentHovered()).toBe(true);
  });
});
