import React from 'react';
import sinon from 'sinon';
import editableRowDriverFactory from './EditableRow.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';
import EditableRow from './EditableRow';
import { editableRowUniDriverFactory } from './EditableRow.uni.driver';

describe('EditableRow', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(editableRowDriverFactory));
  });
  describe('[async]', () => {
    //runTests(createRendererWithUniDriver(editableRowUniDriverFactory));
  });
  function runTests(render) {
    afterEach(() => cleanup());
    let props;

    beforeEach(() => {
      props = {};
    });

    it('should focus on input when mounted', async () => {
      const { driver } = render(<EditableRow {...props} />);
      expect(await driver.isInputFocused()).toEqual(true);
    });

    it('should toggle accept button disabled state according to input presence', async () => {
      const { driver } = render(<EditableRow {...props} />);
      expect(await driver.isApproveDisabled()).toBe(true);
      await driver.setText('new option');
      expect(await driver.isApproveDisabled()).toBe(false);
    });

    it('should set input text from props', async () => {
      const text = 'new option';
      props.newOption = text;
      const { driver } = render(<EditableRow {...props} />);
      expect(await driver.getText()).toEqual(text);
    });

    it('should trigger onApprove callback when approve button is clicked', async () => {
      props.onApprove = sinon.spy();
      const { driver } = render(<EditableRow {...props} />);
      const text = 'new option';
      await driver.setText(text);
      await driver.clickApprove();
      expect(props.onApprove.calledOnce).toBe(true);
      expect(props.onApprove.calledWith(text)).toBe(true);
    });

    it('should trigger onApprove callback when enter key is pressed', async () => {
      props.onApprove = sinon.spy();
      const { driver } = render(<EditableRow {...props} />);
      const text = 'new option';
      await driver.setText(text);
      await driver.keyDown(13); //enter
      expect(props.onApprove.calledOnce).toBe(true);
      expect(props.onApprove.calledWith(text)).toBe(true);
    });

    it('should trigger onCancel callback when cancel button is clicked', async () => {
      props.onCancel = sinon.spy();
      const { driver } = render(<EditableRow {...props} />);
      await driver.clickCancel();
      expect(props.onCancel.calledOnce).toBe(true);
    });

    it('should trigger onCancel callback when escape key is pressed', async () => {
      props.onCancel = sinon.spy();
      const { driver } = render(<EditableRow {...props} />);
      await driver.keyDown(27); //esc
      expect(props.onCancel.calledOnce).toBe(true);
    });
  }
});
