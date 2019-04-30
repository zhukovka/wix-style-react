import React from 'react';
import RadioButton from './RadioButton';
import radioButtonDriverFactory from './RadioButton.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';
import { radioButtonUniDriverFactory } from './RadioButton.uni.driver';

describe('RadioButton', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(radioButtonDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(radioButtonUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    it('should have a label', async () => {
      const label = 'myLabel';
      const { driver } = render(<RadioButton value="1">{label}</RadioButton>);
      expect(await driver.getLabel()).toBe(label);
    });

    it('should be disabled', async () => {
      const { driver } = render(<RadioButton value="1" disabled />);
      expect(await driver.isDisabled()).toBe(true);
    });

    it('should be checked', async () => {
      const { driver } = render(<RadioButton value="1" checked />);
      expect(await driver.isChecked()).toBe(true);
    });

    it('should call onChange', async () => {
      const onChange = jest.fn();
      const value = 1;
      const { driver } = render(
        <RadioButton value={value} onChange={onChange} />,
      );
      await driver.check();
      expect(onChange).toBeCalledWith(value);
    });

    it('should not call onChange if already checked', async () => {
      const onChange = jest.fn();
      const value = 1;
      const { driver } = render(
        <RadioButton value={value} onChange={onChange} checked />,
      );
      await driver.check();
      expect(onChange).not.toBeCalledWith(value);
    });

    it('should not call onChange if disabled', async () => {
      const onChange = jest.fn();
      const value = 1;
      const { driver } = render(
        <RadioButton value={value} onChange={onChange} disabled />,
      );
      await driver.check();
      expect(onChange).not.toBeCalledWith(value);
    });

    describe('given `content` prop', () => {
      it('should render node from that prop', async () => {
        const { driver } = render(<RadioButton content={<span>Hello</span>} />);
        expect((await driver.getContent()).textContent).toBe('Hello');
      });
    });
  }
});
