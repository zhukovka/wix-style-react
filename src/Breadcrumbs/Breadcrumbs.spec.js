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

  it('should use medium size as default', () => {
    const driver = createDriver({onClick, items});
    expect(driver.isMedium()).toBe(true);
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

  it('should get active id from props and have correct class', () => {
    const itemIndex = 1;
    const driver = createDriver({onClick, items, activeId: items[itemIndex].id});
    expect(driver.getActiveItemId()).toBe(itemIndex);
  });

  describe('label appearance', () => {
    it('should have t3 appearance when onWhiteBackground style', () => {
      const theme = 'onWhiteBackground';
      const itemIndex = 1;
      const driver = createDriver({onClick, items, theme});
      expect(driver.getLabelClassList(itemIndex)).toContain('t3');
    });

    it('should have t3 appearance when onGrayBackground style', () => {
      const theme = 'onGrayBackground';
      const itemIndex = 1;
      const driver = createDriver({onClick, items, theme});
      expect(driver.getLabelClassList(itemIndex)).toContain('t3');
    });

    it('should have t3.2 appearance when onDarkBackground style', () => {
      const theme = 'onDarkBackground';
      const itemIndex = 1;
      const driver = createDriver({onClick, items, theme});
      expect(driver.getLabelClassList(itemIndex)).toContain('t3_2');
    });
  });

});
