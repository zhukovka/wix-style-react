import React from 'react';
import sectionHelperDriverFactory from './SectionHelper.driver';
import {createDriverFactory} from '../test-common';

import SectionHelper from './SectionHelper';

const renderSectionHelperWithProps = (properties = {}) => (
  <SectionHelper {...properties}>
    {properties.children || <div>Hello, World!</div>}
  </SectionHelper>
);

describe('SectionHelper', () => {
  const createDriver = createDriverFactory(sectionHelperDriverFactory);

  it('renders to the screen', () => {
    const driver = createDriver(renderSectionHelperWithProps());
    expect(driver.exists()).toBeTruthy();
  });

  it('renders with provided content', () => {
    const driver = createDriver(renderSectionHelperWithProps({children: 'Muffins are the best!'}));
    expect(driver.textContent()).toEqual('Muffins are the best!');
  });

  it('renders with provided title', () => {
    const driver = createDriver(renderSectionHelperWithProps({title: 'Muffins are the best!'}));
    expect(driver.titleText()).toEqual('Muffins are the best!');
  });

  it('renders with provided action text', () => {
    const driver = createDriver(renderSectionHelperWithProps({actionText: 'Muffins are the best!', onAction: () => {}}));
    expect(driver.actionText()).toEqual('Muffins are the best!');
  });

  it('invokes the onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const driver = createDriver(renderSectionHelperWithProps({onClose}));
    driver.clickClose();
    expect(onClose).toBeCalled();
  });

  it('invokes the onAction when action button is clicked', () => {
    const onAction = jest.fn();
    const driver = createDriver(renderSectionHelperWithProps({onAction}));
    driver.clickAction();
    expect(onAction).toBeCalled();
  });

  describe('Themes', () => {
    it('should support standard theme', () => {
      const driver = createDriver(renderSectionHelperWithProps());
      expect(driver.isWarning()).toBeTruthy();
    });

    it('should support standard theme', () => {
      const driver = createDriver(renderSectionHelperWithProps({appearance: 'standard'}));
      expect(driver.isStandard()).toBeTruthy();
    });

    it('should support danger theme', () => {
      const driver = createDriver(renderSectionHelperWithProps({appearance: 'danger'}));
      expect(driver.isDanger()).toBeTruthy();
    });

    it('should support success theme', () => {
      const driver = createDriver(renderSectionHelperWithProps({appearance: 'success'}));
      expect(driver.isSuccess()).toBeTruthy();
    });

    it('should support premium theme', () => {
      const driver = createDriver(renderSectionHelperWithProps({appearance: 'premium'}));
      expect(driver.isPremium()).toBeTruthy();
    });
  });
});
