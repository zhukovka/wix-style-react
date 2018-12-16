import React from 'react';
import { ItemPickerSelector } from './ItemPickerSelector';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { itemPickerSelectorDriverFactory, itemPickerContentDriverFactory } from './ItemPickerSelector.driver';
import Button from '../Button';
import EmptyState from '../EmptyState/EmptyState';
import { dataHooks } from './ItemPickerSelectorDataHooks';
import { rangePolyfill } from 'wix-style-react/dist/testkit/polyfills';

describe('item picker', () => {

  beforeAll(() => {
    rangePolyfill.install();
  });

  const itemPickerComponent = ({
                                 button = <Button data-hook={'button'}/>,
                                 fetchItems = () => Promise.resolve([]),
                                 emptyStateComponent = <EmptyState dataHook={dataHooks.emptyMessage}/>,
                                 itemBuilder = () => {
                                 },
                                 footer = <div data-hook={dataHooks.footer}/>,
                                 onSelect = () => {
                                 },
                               } = {}) => (
    <ItemPickerSelector
      button={button}
      fetchItems={fetchItems}
      emptyStateComponent={emptyStateComponent}
      itemBuilder={itemBuilder}
      footer={footer}
      onSelect={onSelect}
    />
  );

  describe('item picker selector', () => {
    const createDriver = createDriverFactory(itemPickerSelectorDriverFactory);

    it('item picker tooltip should not be shown by default', () => {
      const driver = createDriver(itemPickerComponent());
      expect(driver.tooltipShown()).toBe(false);
    });

    it('item picker tooltip should be shown when tooltip is clicked', () => {
      const driver = createDriver(itemPickerComponent());
      driver.clickTooltip();
      expect(driver.tooltipShown()).toBe(true);
    });
  });

  describe('item picker content', () => {
    const createDriver = createDriverFactory(itemPickerContentDriverFactory);

    const itemPickerContentComponent = props => createDriver(itemPickerComponent(props)).getContent();

    it('should have search component', () => {
      const driver = createDriver(itemPickerContentComponent());
      driver.clickTooltip();
      expect(driver.searchExists()).toBeTruthy();

    });

    it('should have search component original', () => {
      const driver = createDriver(itemPickerContentComponent());
      expect(driver.searchExists()).toBeTruthy();
    });

    it('should present empty message when there are no items', () => {
      const driver = createDriver(itemPickerContentComponent());
      expect(driver.emptyMessageExists()).toBeTruthy();
    });

    it('should call fetch items when mounted ', () => {
      const fetchItems = jest.fn(query => Promise.resolve([]));
      const driver = createDriver(itemPickerContentComponent({ fetchItems }));

      expect(fetchItems).toHaveBeenCalledTimes(1);
      expect(fetchItems).toHaveBeenCalledWith({ query: '' });
    });
  });
});