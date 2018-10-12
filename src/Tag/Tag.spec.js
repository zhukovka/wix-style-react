import React from 'react';
import Tag from './Tag';
import tagDriverFactory from './Tag.driver';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('Tag', () => {

  const createDriver = createDriverFactory(tagDriverFactory);
  const id = 'myId';
  const label = 'Hey';

  it('should have a default small size', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id}>{label}</Tag>);
    expect(driver.isLarge()).toBeFalsy();
  });

  it('should have a large size', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id} size="large">{label}</Tag>);
    expect(driver.isLarge()).toBeTruthy();
  });

  it('should have a label', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id}>{label}</Tag>);
    expect(driver.getLabel()).toBe(label);
  });

  it('should be removable by default', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id}>{label}</Tag>);
    expect(driver.isRemovable()).toBeTruthy();
  });

  it('should not be removable', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id} removable={false}>{label}</Tag>);
    expect(driver.isRemovable()).toBeFalsy();
  });

  it('should have not remove button if disabled is true', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id} disabled>{label}</Tag>);
    expect(driver.isRemovable()).toBeFalsy();
  });

  it('should have disabled class if disabled is true', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id} disabled>{label}</Tag>);
    expect(driver.isDisabled()).toBeTruthy();
  });

  it('should call onRemove function on remove', () => {
    const onRemove = jest.fn();
    const onClick = jest.fn();

    const driver = createDriver(<Tag useOldMargins={false} id={id} onRemove={onRemove} onClick={onClick}>{label}</Tag>);
    driver.removeTag();
    expect(onRemove).toBeCalledWith(id);
    expect(onClick).not.toBeCalled();
  });

  it('should call onClick function on click', () => {
    const onClick = jest.fn();
    const driver = createDriver(<Tag useOldMargins={false} id={id} onClick={onClick}>{label}</Tag>);

    driver.click();
    expect(onClick).toBeCalledWith(id);
  });

  it('should not display thumb by default', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id}>{label}</Tag>);
    expect(driver.isThumbExists()).toBeFalsy();
  });

  it('should display thumb', () => {
    const driver = createDriver(<Tag useOldMargins={false} id={id} thumb={<span>Ho</span>}>{label}</Tag>);
    expect(driver.isThumbExists()).toBeTruthy();
  });

  it('should wrap label text', () => {
    const longLabel = 'Very very very very very very very very long label';
    const driver = createDriver(<Tag useOldMargins={false} id={id} wrap>{longLabel}</Tag>);

    expect(driver.getTitle()).toBe(longLabel);
    expect(driver.getLabel()).toBe(longLabel);
    expect(driver.isWrapped()).toBe(true);
  });

  describe('theme attribute', () => {
    it('should have standard theme by default', () => {
      const driver = createDriver(<Tag useOldMargins={false} id={id}>a</Tag>);
      expect(driver.isStandardTheme()).toBe(true);
    });

    it('should have warning theme', () => {
      const driver = createDriver(<Tag useOldMargins={false} id={id} theme="warning">a</Tag>);
      expect(driver.isWarningTheme()).toBe(true);
    });

    it('should have error theme', () => {
      const driver = createDriver(<Tag useOldMargins={false} id={id} theme="error">a</Tag>);
      expect(driver.isErrorTheme()).toBe(true);
    });
  });

  describe('deprecation', () => {
    const cachedConsoleWarn = global.console.warn;

    it('should warn with deprecation message for using old margins', () => {
      const consoleLogWarnMock = jest.fn();
      global.console.warn = consoleLogWarnMock;

      createDriver(<Tag id={'123'}>a</Tag>);

      expect(global.console.warn).toBeCalled();
      expect(consoleLogWarnMock.mock.calls[0][0]).toMatch(/useOldMargins={false}/);
      global.console.warn = cachedConsoleWarn;
    });
  });
});
