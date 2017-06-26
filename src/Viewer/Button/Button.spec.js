import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import buttonDriverFactory from './Button.driver';
import Button from './Button';
import ButtonLayout from '../ButtonLayout/ButtonLayout';

import {createDriverFactory} from '../../test-common';
import {viewerButtonTestkitFactory} from '../../../testkit';
import {viewerButtonTestkitFactory as enzymeButtonTestkitFactory} from '../../../testkit/enzyme';
import {mount} from 'enzyme';

describe('Button', () => {

  const createDriver = createDriverFactory(buttonDriverFactory);

  it('should click a button', () => {
    const onClick = jest.fn();
    const driver = createDriver(<Button onClick={onClick}/>);

    driver.click();
    expect(onClick).toBeCalled();
  });

  it('should not call onClick when disabled', () => {
    const onClick = jest.fn();
    const driver = createDriver(<Button onClick={onClick} disabled={true}/>);

    driver.click();
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should get disabled class', () => {
    const driver = createDriver(<Button disabled={true}/>);

    expect(driver.isButtonDisabled()).toBe(true);
  });

  it('should render children', () => {
    const children = '<div>123</div>';
    const driver = createDriver(<Button>{children}</Button>);

    expect(driver.getButtonTextContent()).toBe(children);
  });

  describe('design theme: test hover state', () => {
    let driver;
    const theme = ButtonLayout.settings.DESIGN_THEME;
    const defaultHoverBGColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_HOVER_BG_COLOR);
    const defaultColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_HOVER_COLOR);

    beforeEach(() => {
      driver = createDriver(<Button theme={theme}/>);
    });

    it('should have Design theme', () => {
      expect(driver.doesComponentHasClass(theme)).toBeTruthy();
    });

    it('should change the BG color on hover', () => {
      driver.hoverButton();
      expect(driver.getStyle()['background-color']).toBe(defaultHoverBGColor);
    });

    it('should change the TEXT color on hover', () => {
      driver.hoverButton();
      expect(driver.getStyle().color).toBe(defaultColor);
    });
  });

  describe('connected theme: test hover state', () => {
    let driver;
    const theme = ButtonLayout.settings.CONNECTED_THEME;
    const defaultBGColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_BG_COLOR);
    const defaultColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_COLOR);

    beforeEach(() => {
      driver = createDriver(<Button theme={theme}/>);
    });

    it('should have Connected theme', () => {
      expect(driver.doesComponentHasClass(theme)).toBeTruthy();
    });

    it('should swap the BG color on hover with the Text color', () => {
      driver.hoverButton();
      expect(driver.getStyle()['background-color']).toBe(defaultColor);
    });

    it('should swap the TEXT color on hover with the BG color', () => {
      driver.hoverButton();
      expect(driver.getStyle().color).toBe(defaultBGColor);
    });
  });
});

describe('testkit', () => {
  it('should exist', () => {
    const div = document.createElement('div');
    const dataHook = 'myDataHook';
    const onClick = jest.fn();
    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Button onClick={onClick} dataHook={dataHook}/></div>));
    const buttonTestkit = viewerButtonTestkitFactory({wrapper, dataHook});
    expect(buttonTestkit.exists()).toBeTruthy();
  });
});

describe('enzyme testkit', () => {
  it('should exist', () => {
    const dataHook = 'myDataHook';
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick} dataHook={dataHook}/>);
    const buttonTestkit = enzymeButtonTestkitFactory({wrapper, dataHook});
    expect(buttonTestkit.exists()).toBeTruthy();
  });
});
