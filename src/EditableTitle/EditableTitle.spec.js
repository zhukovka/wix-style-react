import React from 'react';
import { cleanup, createRendererWithUniDriver } from '../../test/utils/unit';
import EditableTitle from './EditableTitle';
import { editableTitleUniDriverFactory } from './EditableTitle.uni.driver';

const componentWithProps = (props = {}) => <EditableTitle {...props} />;

describe('EditableTitle', () => {
  afterEach(() => cleanup());

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(editableTitleUniDriverFactory));
  });

  function runTests(render) {
    it('should have a title', async () => {
      const initialValue = 'Some Title';
      const { driver } = render(componentWithProps({ initialValue }));

      expect(await driver.getHeadingText()).toEqual(initialValue);
    });

    it('should have a default', async () => {
      const defaultValue = 'Some Title';
      const { driver } = render(componentWithProps({ defaultValue }));

      expect(await driver.getHeadingText()).toEqual(defaultValue);
    });

    it('should set default as initialValue when focusing', async () => {
      const defaultValue = 'Some Title';
      const { driver } = render(
        componentWithProps({ defaultValue, initialValue: '' }),
      );

      await driver.clickHeading();

      expect(await driver.getInput().getValue()).toEqual(defaultValue);
    });

    it('should return submitted value', async () => {
      const anotherTitle = 'Another Title';
      const onSubmit = jest.fn();
      const { driver } = render(
        componentWithProps({
          defaultValue: 'Some Title',
          initialValue: '',
          onSubmit,
        }),
      );

      await driver.clickHeading();
      await driver.getInput().enterText(anotherTitle);
      await driver.getInput().blur();

      expect(onSubmit).toHaveBeenCalledWith(anotherTitle);
    });
  }
});
