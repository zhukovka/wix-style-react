import eyes from 'eyes.it';
import { datePickerTestkitFactory } from '../../testkit/protractor';
import {
  createStoryUrl,
  createTestStoryUrl,
} from '../../test/utils/storybook-helpers';
import { eyesItInstance } from '../../test/utils/eyes-it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { storySettings, testStories } from './docs/storySettings';

import { storySettings } from './docs/storySettings';

describe('DatePicker', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });
  const { inputDriver, calendarDriver } = datePickerTestkitFactory({
    dataHook: storySettings.dataHook,
  });

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(async () => {
    await autoExampleDriver.reset();
  });

  eyes.it('should not open calendar when disabled', async () => {
    await autoExampleDriver.setProps({ disabled: true });
    await inputDriver.click();

    expect(await calendarDriver.exists()).toBe(false);
  });
  eyes.it(
    'should not close calendar on selecting date with click when shouldCloseOnSelect prop set to false',
    async () => {
      await autoExampleDriver.setProps({ shouldCloseOnSelect: false });
      await inputDriver.click();

      await calendarDriver.clickOnNthAvailableDay(10);

      expect(await calendarDriver.exists()).toBe(true);
      expect(await calendarDriver.isVisible()).toBe(true);
    },
  );

  describe('Test Page', () => {
    const eyes = eyesItInstance();

    //TODO: WIP
    eyes.it(
      'should not close calendar on props change when isOpen prop set to true',
      async () => {
        const url = createTestStoryUrl({
          category: storySettings.category,
          storyName: storySettings.storyName,
          testName: testStories.propsChangeEffectOnCalendarRendering,
        });

        await browser.get(url);
      },
    );
  });

  describe('default', () => {
    eyes.it('should show inputDriver', async () => {
      expect(await inputDriver.isVisible()).toBe(true);
    });

    eyes.it(
      'should open calendar when click on inputDriver',
      async () => {
        await inputDriver.click();
        expect(await calendarDriver.exists()).toBe(true);
        expect(await calendarDriver.isVisible()).toBe(true);
      },
      { version: '<Input/> - On text click - select all' },
    );

    eyes.it('should close calendar on selecting date with click', async () => {
      await inputDriver.click();
      await calendarDriver.clickOnNthAvailableDay(1);
      expect(await calendarDriver.exists()).toBe(false);
    });

    eyes.it(
      'should close calendar on Escape key',
      async () => {
        await inputDriver.click();
        expect(await calendarDriver.exists()).toBe(true);

        await calendarDriver.pressEscKey();
        expect(await calendarDriver.exists()).toBe(false);
      },
      { version: '<Input/> - On text click - select all' },
    );

    eyes.it('should close calendar on Tab key', async () => {
      await inputDriver.click();
      expect(await calendarDriver.exists()).toBe(true);

      await calendarDriver.pressTabKey();
      expect(await calendarDriver.exists()).toBe(false);
    });

    eyes.it(
      'should not change date',
      async () => {
        await autoExampleDriver.setProps({ value: new Date('2017/05/01') });
        await inputDriver.click();
        await calendarDriver.pressEnterKey();

        expect(await inputDriver.getValue()).toBe('2017/05/01');
      },
      { version: '<Input/> - On text click - select all' },
    );

    eyes.it('should select next day date', async () => {
      await autoExampleDriver.setProps({ value: new Date('2017/05/01') });
      await inputDriver.click();
      await calendarDriver.pressArrowRightKey();
      await calendarDriver.pressEnterKey();

      expect(await inputDriver.getValue()).toBe('2017/05/02');
    });
  });

  describe('with year and month dropdown', () => {
    beforeEach(
      async () =>
        await autoExampleDriver.setProps({
          showYearDropdown: true,
          showMonthDropdown: true,
          value: new Date('2017/05/01'),
        }),
    );

    eyes.it('should be scrolled to current year', async () => {
      await inputDriver.click();
      await calendarDriver.openYearDropdownOptions();
      expect(await calendarDriver.isYearInViewPort('2017')).toBeTruthy();
    });

    eyes.it('should select 2027 year', async () => {
      await inputDriver.click();

      await calendarDriver.openYearDropdownOptions();
      await calendarDriver.clickOnNthYear();
      await calendarDriver.clickOnNthAvailableDay();

      expect(await inputDriver.getValue()).toBe('2027/05/01');
    });

    eyes.it('should select February', async () => {
      await inputDriver.click();

      await calendarDriver.openMonthDropdownOptions();
      await calendarDriver.clickOnNthMonth(2);
      await calendarDriver.clickOnNthAvailableDay();

      expect(await inputDriver.getValue()).toBe('2017/02/01');
    });

    eyes.it('should select February and 2026 year', async () => {
      await inputDriver.click();

      await calendarDriver.openYearDropdownOptions();
      await calendarDriver.clickOnNthYear(2);
      await calendarDriver.openMonthDropdownOptions();
      await calendarDriver.clickOnNthMonth(2);
      await calendarDriver.clickOnNthAvailableDay();

      expect(await inputDriver.getValue()).toBe('2026/02/01');
    });
  });
});
