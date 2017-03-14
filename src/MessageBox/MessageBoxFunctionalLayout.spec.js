import React from 'react';
import MessageBoxFunctionalLayout from './MessageBoxFunctionalLayout';
import MessageBoxFunctionalLayoutFactory from './MessageBoxFunctionalLayout.driver';
import {createDriverFactory} from '../test-common';
import sinon from 'sinon';
import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';
import {messageBoxFunctionalLayoutTestkitFactory} from '../../testkit';
import {messageBoxFunctionalLayoutTestkitFactory as enzymeMessageBoxTestkitFactory} from '../../testkit/enzyme';


describe('MessageBox', () => {
  const createDriver = createDriverFactory(MessageBoxFunctionalLayoutFactory);
  describe('action buttons', () => {
    it('should display the confirmation text on top the confirmation button', () => {
      const props = {
        confirmText: 'confirmText'
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getConfirmationButtonText()).toBe(props.confirmText);
    });

    it('should display the cancellation text on top the cancellation button', () => {
      const props = {
        cancelText: 'cancelText'
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getCancellationButtonText()).toBe(props.cancelText);
    });

    it('should not display the cancellation button if cancellationText is empty', () => {
      const props = {
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getCancellationButton()).toBeNull();
    });

    it(`should trigger the 'onOk' action upon clicking the confirmation button`, () => {
      const props = {
        onOk: sinon.spy()
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      driver.clickOnConfirmationButton();
      expect(props.onOk.calledOnce).toBeTruthy();
    });

    it(`should trigger the 'onCancel' action upon clicking the cancellation button`, () => {
      const props = {
        cancelText: 'cancelText',
        onCancel: sinon.spy()
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      driver.clickOnCancellationButton();
      expect(props.onCancel.calledOnce).toBeTruthy();
    });
  });

  describe('theme attribute', () => {
    it('should set the theme by default to "blue"', () => {
      const props = {
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.isThemeExist('blue')).toBeTruthy();
    });

    it('should allowing setting the theme', () => {
      const props = {
        theme: 'green'
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.isThemeExist('green')).toBeTruthy();
      expect(driver.isThemeExist('blue')).toBeFalsy();
    });
  });

  describe('general', () => {

    it(`should hide the footer`, () => {
      const props = {
        hideFooter: true
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getFooter()).toBeNull();
    });

    it(`should show footer by default`, () => {
      const props = {
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getFooter()).not.toBeNull();
    });

    it(`should render title`, () => {
      const props = {
        title: 'title'
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getTitle()).toBe(props.title);
    });

    it(`should render the passed children in the markup`, () => {
      const props = {
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}>
        <div data-hook="inner-div"/>
      </MessageBoxFunctionalLayout>);
      expect(driver.getChildBySelector('[data-hook="inner-div"]')).not.toBeNull();
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<MessageBoxFunctionalLayout/>, messageBoxFunctionalLayoutTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<MessageBoxFunctionalLayout/>, enzymeMessageBoxTestkitFactory)).toBe(true);
    });
  });


});
