import React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import statsWidgetDriverFactory from './StatsWidget.driver';
import StatsWidget, { deprecationMessage } from './StatsWidget';
import ButtonWithOptions from '../ButtonWithOptions';
import { depLogger } from '../utils/deprecationLog';

describe('StatsWidget', () => {
  const createDriver = createDriverFactory(statsWidgetDriverFactory);

  const title = 'Stats Widget title';
  const statistics = [
    {
      title: '10$',
      subtitle: 'Revenue',
    },
    {
      title: '2',
      subtitle: 'Products',
    },
    {
      title: '1',
      subtitle: 'Transactions',
    },
    {
      title: '5',
      subtitle: 'Profit',
    },
    {
      title: '15',
      subtitle: 'Music',
    },
  ];

  const statisticsWithPercents = [
    {
      title: '10$',
      subtitle: 'Revenue',
      percent: 15,
    },
    {
      title: '2',
      subtitle: 'Products',
      percent: -15,
    },
    {
      title: '1',
      subtitle: 'Transactions',
      percent: 0,
    },
  ];

  let driver;

  function createComponent(props) {
    driver = createDriver(<StatsWidget {...props} />);
  }

  it('should have correct title', () => {
    createComponent({ title, statistics });
    expect(driver.titleText()).toBe(title);
  });

  it('should show statistics and not empty state', () => {
    createComponent({ title, statistics });
    expect(driver.getStatisticTitle(0)).toBe(statistics[0].title);
    expect(driver.getStatisticSubTitle(0)).toBe(statistics[0].subtitle);
    expect(driver.isEmptyStateExists()).toBe(false);
  });

  it('should show empty state and not statistics', () => {
    createComponent({ title, emptyState: <div>Empty</div> });
    expect(driver.isEmptyStateExists()).toBe(true);
    expect(driver.isStatisticsContentExists()).toBe(false);
  });

  it('should show abs of percentage', () => {
    createComponent({ title, statistics: statisticsWithPercents });
    expect(driver.getStatisticPercentValue(0)).toBe(
      Math.abs(statisticsWithPercents[0].percent) + '%',
    );
    expect(driver.getStatisticPercentValue(1)).toBe(
      Math.abs(statisticsWithPercents[1].percent) + '%',
    );
  });

  it('should check the stats percent color skin', () => {
    createComponent({ title, statistics: statisticsWithPercents });
    expect(driver.isNegativePercentValue(0)).toBe(false);
    expect(driver.isNegativePercentValue(1)).toBe(true);
  });

  it('should put proper classes to percentage according to value', () => {
    createComponent({ title, statistics: statisticsWithPercents });

    expect(driver.getStatisticPercentClass(0)).toContain('isPositive');
    expect(driver.getStatisticPercentClass(1)).toContain('isNegative');

    expect(driver.getStatisticPercentClass(2)).not.toContain('isNegative');
    expect(driver.getStatisticPercentClass(2)).not.toContain('isPositive');
  });

  it('should show filter with DropdownBase inside', () => {
    const children = (
      <StatsWidget.FilterButton
        open
        selectedId={1}
        dataHook="stats-widget-filter"
        options={[{ id: 1, value: 'value' }]}
      />
    );
    createComponent({ title, statistics, children });
    expect(
      driver
        .getFilterButtonDriver('stats-widget-filter')
        .dropdownLayoutDriver.exists(),
    ).toBe(true);
  });

  it('filters should have selectable options', () => {
    const onSelectStub = jest.fn();

    const children = (
      <StatsWidget.FilterButton
        open
        selectedId={1}
        dataHook="stats-widget-filter"
        onSelect={onSelectStub}
        options={[{ id: 1, value: 'value' }]}
      />
    );
    createComponent({ title, statistics, children });
    driver
      .getFilterButtonDriver('stats-widget-filter')
      .dropdownLayoutDriver.clickAtOption(0);
    expect(onSelectStub).toHaveBeenCalledWith({ id: 1, value: 'value' });
  });

  it('should show filters with option value specified', () => {
    const value = 'Last Week';
    const children = (
      <StatsWidget.FilterButton
        open
        selectedId={1}
        dataHook="stats-widget-filter"
        options={[{ id: 1, value }]}
      />
    );
    createComponent({ title, statistics, children });
    expect(
      driver
        .getFilterButtonDriver('stats-widget-filter')
        .dropdownLayoutDriver.optionsContent(),
    ).toContain(value);
  });

  describe('propTypes validation', () => {
    let consoleErrorSpy;

    const createChildren = n =>
      Array(n)
        .fill()
        .map((v, i) => (
          <StatsWidget.FilterButton
            open
            key={i}
            selectedId={1}
            dataHook="stats-widget-filter"
            options={[{ id: 1, value: 'value' }]}
          />
        ));

    beforeEach(() => {
      consoleErrorSpy = jest
        .spyOn(global.console, 'error')
        .mockImplementation(jest.fn());
    });

    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    it('should not initialize component with percent which are not a numbers', () => {
      const wrongStatistics = [
        {
          title: '10$',
          subtitle: 'Revenue',
          percent: '15%',
        },
        {
          title: '2',
          subtitle: 'Products',
          percent: '-15%',
        },
        {
          title: '1',
          subtitle: 'Transactions',
          percent: '0',
        },
      ];

      const PageRequiredChildrenArrayError =
        'Warning: Failed prop type: Invalid prop `statistics[0].percent` of type `string` supplied to `StatsWidget`, expected `number`.\n    in StatsWidget';
      createComponent({ title, statistics: wrongStatistics });

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        PageRequiredChildrenArrayError,
      );
    });

    it('should throw when there are more than 3 children', () => {
      createComponent({
        title,
        statistics,
        children: createChildren(4),
      });

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Warning: Failed prop type: Invalid Prop children, maximum amount of filters are 3\n    in StatsWidget',
      );
    });

    it('should throw when children are not <StatsWidget.FilterButton/>', () => {
      createComponent({
        title,
        statistics,
        children: [<div key="1" />, <div key="2" />, <div key="3" />],
      });

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Warning: Failed prop type: StatsWidget: Invalid Prop children, only <StatsWidget.FilterButton/> is allowed\n    in StatsWidget',
      );
    });
  });

  describe('deprecated usage with ButtonWithOptions', () => {
    let deprecationLogSpy;

    beforeEach(() => {
      deprecationLogSpy = jest
        .spyOn(depLogger, 'log')
        .mockImplementation(jest.fn());
    });

    afterEach(() => {
      // We'll expect the prop types error to be thrown
      expect(deprecationLogSpy).toHaveBeenCalledWith(deprecationMessage);

      deprecationLogSpy.mockRestore();
    });

    it('should show filter with ButtonWithOptions inside', () => {
      const children = (
        <StatsWidget.Filter selectedId={1} dataHook="stats-widget-filter">
          <ButtonWithOptions.Button />
          {[
            <ButtonWithOptions.Option key={1} id="1">
              value
            </ButtonWithOptions.Option>,
          ]}
        </StatsWidget.Filter>
      );
      createComponent({ title, statistics, children });
      expect(
        driver
          .getFilterDriver('stats-widget-filter')
          .dropdownLayoutDriver.exists(),
      ).toBe(true);
    });

    it('filters should have selectable options', () => {
      const onSelectStub = jest.fn();

      const children = (
        <StatsWidget.Filter
          selectedId={1}
          dataHook="stats-widget-filter"
          onSelect={onSelectStub}
        >
          <ButtonWithOptions.Button />
          {[
            <ButtonWithOptions.Option id="1" key={1}>
              value
            </ButtonWithOptions.Option>,
          ]}
        </StatsWidget.Filter>
      );
      createComponent({ title, statistics, children });
      driver
        .getFilterDriver('stats-widget-filter')
        .dropdownLayoutDriver.clickAtOption(0);
      expect(onSelectStub).toHaveBeenCalled();
    });

    it('should show filters with option value specified', () => {
      const value = 'Last Week';
      const children = (
        <StatsWidget.Filter selectedId={1} dataHook="stats-widget-filter">
          <ButtonWithOptions.Button />
          {[
            <ButtonWithOptions.Option id="1" key={1}>
              {value}
            </ButtonWithOptions.Option>,
          ]}
        </StatsWidget.Filter>
      );
      createComponent({ title, statistics, children });
      expect(
        driver
          .getFilterDriver('stats-widget-filter')
          .dropdownLayoutDriver.optionsContent(),
      ).toContain(value);
    });
  });
});
