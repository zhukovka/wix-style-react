import React from 'react';
import ButtonLayout from './ButtonLayout';
import {createDriverFactory} from '../../BaseComponents/test-common';
import buttonDriverFactory from './ButtonLayout.driver';

const someDivWithLayout = (props = {}) => (
  <ButtonLayout {...props}>
    <div>
      abc
    </div>
  </ButtonLayout>
);

describe('ButtonLayout', () => {
  const createDriver = createDriverFactory(buttonDriverFactory);

  it('should wrap a native component with ButtonLayout', () => {
    const driver = createDriver(someDivWithLayout());
    expect(driver.exists()).toEqual(true);
  });

  it('should preserve all existing properties of the element', () => {
    const href = 'http://www.wix.com';
    const driver = createDriver(
      <ButtonLayout>
        <a href={href}>
          abc
        </a>
      </ButtonLayout>
    );

    expect(driver.exists()).toEqual(true);
    expect(driver.getComponentAttribute('href')).toEqual(href);
  });

  it('should extend existing className of the element', () => {
    const driver = createDriver(
      <ButtonLayout>
        <div className="myClass">
          abc
        </div>
      </ButtonLayout>
    );

    expect(driver.exists()).toEqual(true);
    expect(driver.doesComponentHasClass('myClass')).toEqual(true);
  });

  it('should wrap a custom component with ButtonLayout', () => {
    const CustomComponent = props => (
      <div {...props}>
        abc
      </div>
    );
    const driver = createDriver(
      <ButtonLayout>
        <CustomComponent/>
      </ButtonLayout>
    );

    expect(driver.exists()).toEqual(true);
  });

  it('should bypass some styles', () => {
    const driver = createDriver(someDivWithLayout());

    expect(driver.exists()).toEqual(true);
    expect(driver.getComponentAttribute('style')).toContain('display: inline-block;');
  });

  describe('class', () => {
    it('should get disabled class', () => {
      const driver = createDriver(someDivWithLayout({disabled: true}));

      expect(driver.doesComponentHasClass('disabled')).toBeTruthy();
    });

    it('should get "small" height class', () => {
      const height = 'small';
      const driver = createDriver(someDivWithLayout({height}));

      expect(driver.doesComponentHasClass(`heightsmall`)).toBeTruthy();
    });

    it('should get "large" height class', () => {
      const height = 'large';
      const driver = createDriver(someDivWithLayout({height}));

      expect(driver.doesComponentHasClass(`heightlarge`)).toBe(true);
    });

    it('should get "hover" class', () => {
      const driver = createDriver(someDivWithLayout({hover: true}));
      expect(driver.doesComponentHasClass('hover')).toBeTruthy();
    });

  });

  describe('Fill theme', () => {
    const defaultBGColor = ButtonLayout.settings.DEFAULT_FILL_BG_COLOR;
    const defaultColor = ButtonLayout.settings.DEFAULT_FILL_COLOR;
    const theme = ButtonLayout.settings.FILL_THEME;
    let driver;

    beforeEach(() => {
      driver = createDriver(someDivWithLayout({}));
    });

    it('should use Fill theme as default', () => {
      expect(driver.doesComponentHasClass(theme)).toBeTruthy();
    });

    it('should check the default BG color ', () => {
      expect(driver.getStyle()['background-color']).toBe(defaultBGColor);
    });

    it('should check the default TEXT color ', () => {
      expect(driver.getStyle().color).toBe(defaultColor);
    });
  });

  describe('design theme', () => {
    let driver;
    const theme = ButtonLayout.settings.DESIGN_THEME;
    const defaultBGColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_BG_COLOR, 0);
    const defaultColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_COLOR);

    beforeEach(() => {
      driver = createDriver(someDivWithLayout({theme}));
    });

    it('should have Design theme', () => {
      expect(driver.doesComponentHasClass(theme)).toBeTruthy();
    });

    it('should check the default BG color ', () => {
      expect(driver.getStyle()['background-color']).toBe(defaultBGColor);
    });

    it('should check the default TEXT color ', () => {
      expect(driver.getStyle().color).toBe(defaultColor);
    });

    it('should change button color and opacity', () => {
      const bgColor = '#ff00f0';
      const bgOpacity = 0.2;
      const expectedRGBA = 'rgba(255, 0, 240, 0.2)';
      driver = createDriver(someDivWithLayout({theme, backgroundColor: bgColor, backgroundColorOpacity: bgOpacity}));
      expect(driver.getStyle()['background-color']).toBe(expectedRGBA);
    });

    it('should change button radius', () => {
      const radius = 2;
      driver = createDriver(someDivWithLayout({theme, radius}));
      expect(driver.getStyle()['border-radius']).toBe(`${radius}px`);
    });
  });

  describe('connected theme', () => {
    let driver;
    const theme = ButtonLayout.settings.CONNECTED_THEME;
    const defaultBGColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_BG_COLOR, 0);
    const defaultColor = ButtonLayout.generateRGBAColor(ButtonLayout.settings.DEFAULT_DESIGN_COLOR);

    beforeEach(() => {
      driver = createDriver(someDivWithLayout({theme}));
    });

    it('should have Connected theme', () => {
      expect(driver.doesComponentHasClass(theme)).toBeTruthy();
    });

    it('should check the default BG color ', () => {
      expect(driver.getStyle()['background-color']).toBe(defaultBGColor);
    });

    it('should check the default TEXT color ', () => {
      expect(driver.getStyle().color).toBe(defaultColor);
    });

    it('should change button color and opacity', () => {
      const bgColor = '#ff00f0';
      const bgOpacity = 0.2;
      const expectedRGBA = 'rgba(255, 0, 240, 0.2)';
      driver = createDriver(someDivWithLayout({theme, backgroundColor: bgColor, backgroundColorOpacity: bgOpacity}));
      expect(driver.getStyle()['background-color']).toBe(expectedRGBA);
    });

    it('should change button radius', () => {
      const radius = 2;
      driver = createDriver(someDivWithLayout({theme, radius}));
      expect(driver.getStyle()['border-radius']).toBe(`${radius}px`);
    });
  });
});
