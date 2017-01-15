import _ from 'lodash/fp';
import {componentFactory, breadcrumbsDriverFactory} from './testkit/Breadcrumbs';

describe('Breadcrumbs', () => {
  const createDriver = _.compose(breadcrumbsDriverFactory, componentFactory);
  const items = [
    {id: 0, value: 'Option 1'},
    {id: 1, value: 'Option 2'}
  ];
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it('should have correct text on each breadcrumb', () => {
    const driver = createDriver({onClick, items});
    expect(driver.breadcrumbContentAt(0)).toBe(items[0].value);
    expect(driver.breadcrumbContentAt(1)).toBe(items[1].value);
  });

  it('should call onClick callback on click with correct item', () => {
    const driver = createDriver({onClick, items});
    const itemIndex = 1;

    driver.clickBreadcrumbAt(itemIndex);
    expect(onClick).toBeCalledWith(items[itemIndex].id);
  });

  it('should get correct size from props', () => {
    const size = 'large';
    const driver = createDriver({onClick, items, size});
    expect(driver.isLarge()).toBe(true);
  });

  it('should use regular size as default', () => {
    const driver = createDriver({onClick, items});
    expect(driver.isLarge()).toBe(false);
  });

  it('should get theme from props', () => {
    const theme = 'onWhiteBackground';
    const driver = createDriver({onClick, items, theme});
    expect(driver.isOnWhiteBackground()).toBe(true);
  });

  it('should use default theme gray background', () => {
    const driver = createDriver({onClick, items});
    expect(driver.isOnGrayBackground()).toBe(true);
  });
});
