import React from 'react';

import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/react';
import { makeControlled } from '../../test/utils';
import InputWithOptions from './InputWithOptions';
import inputWithOptionsDriverFactory from './InputWithOptions.driver';
import { inputWithOptionsUniDriverFactory } from './InputWithOptions.uni.driver';

describe('InputWithOptions', () => {
  const ControlledInputWithOptions = makeControlled(InputWithOptions);

  const options = [
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3', disabled: true },
    { id: 3, value: 'Option 4' },
    { id: 'divider1', value: '-' },
    {
      id: 'element1',
      value: <span style={{ color: 'brown' }}>Option 4</span>,
    },
  ];

  describe('[sync]', () => {
    runTests(createRendererWithDriver(inputWithOptionsDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(inputWithOptionsUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());
    const createDriver = jsx => render(jsx).driver;

    it('should NOT show dropdown when autofocus is on', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} autoFocus />,
      );
      expect(await inputDriver.isFocus()).toBeTruthy();
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should have an Input and an hidden DropdownLayout', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      expect(await inputDriver.exists()).toBeTruthy();
      expect(await dropdownLayoutDriver.exists()).toBeTruthy();
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should show DropdownLayout when input get focused', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      await driver.focus();
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    describe('showOptionsIfEmptyInput property', () => {
      describe('show options if input is empty (default behaviour)', () => {
        it('should show DropdownLayout if input is empty and down arrow pressed', async () => {
          const { driver, dropdownLayoutDriver } = createDriver(
            <ControlledInputWithOptions
              showOptionsIfEmptyInput
              options={options}
            />,
          );

          await driver.pressKey('ArrowDown');
          expect(await dropdownLayoutDriver.isShown()).toBe(true);
        });
      });

      describe('do not show options if input is empty', () => {
        it('should not show DropdownLayout if input is empty and focused', async () => {
          const { driver, dropdownLayoutDriver } = createDriver(
            <ControlledInputWithOptions
              showOptionsIfEmptyInput={false}
              options={options}
            />,
          );

          await driver.pressKey('ArrowDown');
          expect(await dropdownLayoutDriver.isShown()).toBe(false);
        });

        it('should show DropdownLayout if initial value passed and input focused', async () => {
          const { driver, dropdownLayoutDriver } = createDriver(
            <ControlledInputWithOptions
              showOptionsIfEmptyInput={false}
              value={options[0].value}
              options={options}
            />,
          );

          expect(await dropdownLayoutDriver.isShown()).toBe(false);
          await driver.pressKey('ArrowDown');
          expect(await dropdownLayoutDriver.isShown()).toBe(true);
        });

        it('should show DropdownLayout if text was entered', async () => {
          const driver = createDriver(
            <ControlledInputWithOptions
              showOptionsIfEmptyInput={false}
              options={options}
            />,
          );

          expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
          await driver.inputDriver.focus();
          expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
          await driver.inputDriver.enterText('some value');
          expect(await driver.dropdownLayoutDriver.isShown()).toBe(true);
        });

        it('should not show DropdownLayout if input was emptied', async () => {
          const driver = createDriver(
            <ControlledInputWithOptions
              showOptionsIfEmptyInput={false}
              options={options}
            />,
          );

          await driver.inputDriver.enterText('some value');
          await driver.inputDriver.clearText();
          expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
        });

        it('should not show DropdownLayout if input is empty and no char was produced by keypress', async () => {
          const driver = createDriver(
            <ControlledInputWithOptions
              showOptionsIfEmptyInput={false}
              options={options}
            />,
          );

          await driver.inputDriver.trigger('keyDown', {
            key: 37, // <Left Arrow> key code
          });
          expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
        });

        it('should hide options on option select', async () => {
          const driver = createDriver(
            <ControlledInputWithOptions
              value="some value"
              showOptionsIfEmptyInput={false}
              options={options}
              closeOnSelect
              onSelect={function(option) {
                this.setState({ value: option.value });
              }}
            />,
          );

          await driver.inputDriver.focus();
          await driver.dropdownLayoutDriver.clickAtOption(0);
          expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
        });

        it('should not hide options on option select if closeOnSelect is set to false', async () => {
          const driver = createDriver(
            <ControlledInputWithOptions
              value="some value"
              showOptionsIfEmptyInput={false}
              options={options}
              closeOnSelect={false}
              onSelect={function(option) {
                this.setState({ value: option.value });
              }}
            />,
          );

          await driver.inputDriver.focus();
          await driver.dropdownLayoutDriver.clickAtOption(0);
          expect(await driver.dropdownLayoutDriver.isShown()).toBe(true);
        });
      });
    });

    it('should not show DropdownLayout when a non whitelisted key is pressed', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      await driver.pressKey('Any');
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should show DropdownLayout on down key', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      await driver.pressKey('ArrowDown');
      expect(await dropdownLayoutDriver.isShown()).toBeTruthy();
    });

    it('should not show DropdownLayout on modifier keys', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      await driver.pressKey('Shift');
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
      await driver.pressKey('Alt');
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
      await driver.pressKey('Control');
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should hide DropdownLayout on enter and esc key press', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      await driver.pressKey('ArrowDown');
      expect(await dropdownLayoutDriver.isShown()).toBeTruthy();
      await driver.pressKey('Enter');
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
      await driver.pressKey('Escape');
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should start keyboard navigation from last selected option when re-opening the dropdown layout', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} selectedId={1} />,
      );
      await driver.focus();

      await dropdownLayoutDriver.clickAtOption(1);
      await driver.outsideClick();
      await driver.focus();
      await driver.pressKey('ArrowDown');

      expect(await dropdownLayoutDriver.isOptionSelected(1)).toBeTruthy();

      await driver.pressKey('ArrowDown'); // going to skip disabled option at index 2
      expect(await dropdownLayoutDriver.isOptionHovered(3)).toBeTruthy();
    });

    it('should call onManuallyInput on enter key press with a trimed value', async () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <InputWithOptions
          options={options}
          onManuallyInput={onManuallyInput}
        />,
      );
      await inputDriver.enterText('my text      ');
      await driver.pressKey('Enter');
      expect(onManuallyInput).toBeCalledWith('my text', undefined);
    });

    it('should call onManuallyInput on enter key press', async () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <InputWithOptions
          options={options}
          onManuallyInput={onManuallyInput}
        />,
      );
      await inputDriver.enterText('my text');
      await driver.pressKey('Enter');
      expect(onManuallyInput).toBeCalledWith('my text', undefined);
    });

    it('should call onManuallyInput on tab key press', async () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <InputWithOptions
          options={options}
          onManuallyInput={onManuallyInput}
        />,
      );
      await inputDriver.enterText('my text');
      await driver.pressKey('Tab');
      expect(onManuallyInput).toBeCalledWith('my text', undefined);
    });

    it('should select and close dropdown on press tab key', async () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions
          options={options}
          onManuallyInput={onManuallyInput}
        />,
      );
      await inputDriver.focus();
      await driver.pressKey('ArrowDown');
      expect(await inputDriver.isFocus()).toBe(true);
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
      await driver.pressKey('Tab');
      // todo: jest limitation of mimicking native Tab browser behaviour
      // expect(inputDriver.isFocus()).toBe(false);
      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should focus out of the component and close dropdown for an empty input when pressing tab key', async () => {
      const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions closeOnSelect={false} options={options} />,
      );
      await inputDriver.click();
      // expect(inputDriver.isFocus()).toBe(true);
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
      await driver.pressKey('Tab');
      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should open options when clicked', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      expect(await dropdownLayoutDriver.isShown()).toBe(false);
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should NOT close options when input clicked before 2 seconds passed from last opening', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      const originalNow = Date.now;

      Date.now = () => 0;
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(true);

      Date.now = () => 1500;
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(true);

      Date.now = originalNow;
    });

    it('should close options when input clicked after 2 seconds from last opening', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      const originalNow = Date.now;

      Date.now = () => 0;
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(true);

      Date.now = () => 2500;
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(false);

      Date.now = originalNow;
    });

    it('should stay focused on tab key press with closeOnSelect=false', async () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions
          options={options}
          onManuallyInput={onManuallyInput}
          closeOnSelect={false}
        />,
      );
      await inputDriver.focus();
      await inputDriver.enterText('Option 1');
      await driver.pressKey('ArrowDown');
      expect(await inputDriver.isFocus()).toBe(true);
      await driver.pressKey('Tab');
      expect(await inputDriver.isFocus()).toBe(true);
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should suggest an option when calling onManuallyInput', async () => {
      const onManuallyInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <InputWithOptions
          options={options}
          onManuallyInput={onManuallyInput}
        />,
      );
      await inputDriver.enterText('Option 2');
      await driver.pressKey('Enter');
      expect(onManuallyInput).toBeCalledWith('Option 2', {
        id: 1,
        value: 'Option 2',
      });
    });

    it('should hide options on selection by default', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      await driver.focus();
      await dropdownLayoutDriver.clickAtOption(0);
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should hide options on outside click', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      await driver.outsideClick();
      expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should not hide options on selection', async () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} closeOnSelect={false} />,
      );
      await driver.focus();
      await dropdownLayoutDriver.clickAtOption(0);
      expect(await dropdownLayoutDriver.isShown()).toBeTruthy();
    });

    it('should call onSelect when an option is pressed', async () => {
      const onSelect = jest.fn();
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} onSelect={onSelect} />,
      );
      await driver.focus();
      await dropdownLayoutDriver.clickAtOption(0);
      expect(onSelect).toBeCalledWith(options[0]);
    });

    it('should call onSelect when a selected option is pressed', async () => {
      const onSelect = jest.fn();
      const { driver, dropdownLayoutDriver } = createDriver(
        <InputWithOptions
          options={options}
          onSelect={onSelect}
          selectedId={options[0].id}
        />,
      );
      await driver.focus();
      await dropdownLayoutDriver.clickAtOption(0);
      expect(onSelect).toBeCalled();
    });

    it('should call onFocus', async () => {
      const onFocus = jest.fn();
      const { driver } = createDriver(
        <InputWithOptions options={options} onFocus={onFocus} />,
      );
      await driver.focus();
      expect(onFocus).toBeCalled();
    });

    it('should call onBlur if clicked outside and input is focused', async () => {
      const onBlur = jest.fn();
      const { driver, inputDriver } = createDriver(
        <InputWithOptions options={options} onBlur={onBlur} />,
      );
      await driver.outsideClick();
      expect(onBlur).not.toBeCalled();
      await driver.focus();
      await driver.outsideClick();
      await inputDriver.blur(); // apparently, jsdom does not fire onBlur after input.blur() is called
      expect(onBlur).toBeCalled();
    });

    it('should not call onManuallyInput when composing text via external means', async () => {
      const onManualInput = jest.fn();
      const { driver, inputDriver } = createDriver(
        <InputWithOptions options={options} onManuallyInput={onManualInput} />,
      );
      await inputDriver.startComposing();
      await driver.pressKey('Enter');
      expect(onManualInput).not.toBeCalled();
      await inputDriver.endComposing();
      await driver.pressKey('Enter');
      expect(onManualInput).toBeCalled();
    });

    it('should wrap all options to highlighter component if prop highlight true', async () => {
      const { driver } = createDriver(
        <InputWithOptions options={options} highlight />,
      );
      expect(
        await driver.isOptionWrappedToHighlighter(options[0].id),
      ).toBeTruthy();
    });

    it('should not wrap all options to highlighter component if prop highlight false', async () => {
      const { driver } = createDriver(
        <InputWithOptions options={options} highlight={false} />,
      );
      expect(
        await driver.isOptionWrappedToHighlighter(options[0].id),
      ).toBeFalsy();
    });

    // TODO
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('should change input value when an option is pressed', async () => {
      const driver = createDriver(<InputWithOptions options={options} />);
      await driver.inputDriver.focus();

      const OPTION_INDEX = 0;
      await driver.dropdownLayoutDriver.clickAtOption(OPTION_INDEX);
      expect(await driver.inputDriver.getValue()).toBe(
        options[OPTION_INDEX].value,
      );
    });

    // TODO
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('should invoke onChange with proper event object when an option is pressed', async () => {
      const onChange = jest.fn();
      const driver = createDriver(
        <InputWithOptions
          options={options}
          value="some value"
          onChange={onChange}
        />,
      );
      await driver.inputDriver.focus();

      const OPTION_INDEX = 0;
      await driver.dropdownLayoutDriver.clickAtOption(OPTION_INDEX);
      expect(onChange).toBeCalled();
      expect(onChange.mock.calls[0][0].target.value).toBe(
        options[OPTION_INDEX].value,
      );
    });

    it('should support autocomplete prop', async () => {
      const { inputDriver } = createDriver(
        <InputWithOptions autocomplete="off" />,
      );
      expect(await inputDriver.getAutocomplete()).toBe('off');
    });

    it('should support tabIndex prop', async () => {
      const { dropdownLayoutDriver } = createDriver(
        <InputWithOptions tabIndex={-1} />,
      );
      expect(await dropdownLayoutDriver.tabIndex()).toBe(-1);
    });

    it('should support required prop', async () => {
      const { inputDriver } = createDriver(<InputWithOptions required />);
      expect(await inputDriver.getRequired()).toBeTruthy();
    });

    it('should support a divider option', async () => {
      const { dropdownLayoutDriver } = createDriver(
        <InputWithOptions options={options} />,
      );
      expect(await dropdownLayoutDriver.isOptionADivider(4)).toBeTruthy();
    });

    describe('onKeyArrowDown', () => {
      it('should behave normal when external onKeyArrowDown passed', async () => {
        const { driver, dropdownLayoutDriver } = createDriver(
          <InputWithOptions options={options} onKeyArrowDown={() => null} />,
        );
        await driver.pressKey('ArrowDown');
        expect(await dropdownLayoutDriver.isShown()).toBeTruthy();
        await driver.pressKey('Enter');
        expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
        await driver.pressKey('Escape');
        expect(await dropdownLayoutDriver.isShown()).toBeFalsy();
      });
    });

    describe('onSelect', () => {
      it('should call onSelect on enter key press', async () => {
        const onSelect = jest.fn();
        const { driver } = createDriver(
          <InputWithOptions options={options} onSelect={onSelect} />,
        );
        await driver.pressKey('ArrowDown');
        await driver.pressKey('ArrowDown');
        await driver.pressKey('Enter');
        expect(onSelect).toBeCalledWith(options[0]);
      });

      it('should call onSelect on tab key press', async () => {
        const onSelect = jest.fn();
        const { driver } = createDriver(
          <InputWithOptions options={options} onSelect={onSelect} />,
        );
        await driver.pressKey('ArrowDown');
        await driver.pressKey('ArrowDown');
        await driver.pressKey('Tab');
        expect(onSelect).toBeCalledWith(options[0]);
      });

      it('should not call onSelect on space key press', async () => {
        const onSelect = jest.fn();
        const { driver } = createDriver(
          <InputWithOptions options={options} onSelect={onSelect} />,
        );
        await driver.focus();
        await driver.pressKey('ArrowDown');
        await driver.pressKey(' ');
        expect(onSelect).not.toHaveBeenCalled();
      });

      it('should call onSelect on space key press in readOnly mode', async () => {
        const onSelect = jest.fn();
        class ReadOnlyInput extends InputWithOptions {
          inputAdditionalProps = () => ({ readOnly: true });
        }
        const { driver } = createDriver(
          <ReadOnlyInput options={options} onSelect={onSelect} />,
        );
        await driver.pressKey('ArrowDown');
        await driver.pressKey('ArrowDown');
        await driver.pressKey(' ');
        expect(onSelect).toBeCalledWith(options[0]);
      });
    });

    describe('appearance', () => {
      it('should be possible to specify the theme of underlying elements', async () => {
        const props = { theme: 'material', dataHook: 'myDataHook' };
        const { driver } = render(<InputWithOptions {...props} />);
        expect(await driver.inputDriver.isOfStyle(props.theme)).toBe(true);
        expect(await driver.dropdownLayoutDriver.hasTheme(props.theme)).toBe(
          true,
        );
      });
    });
  }
});
