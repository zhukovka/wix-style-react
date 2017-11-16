import React from 'react';
import StickyPage from './StickyPage';
import stickyPageDriverFactory from './StickyPage.driver';
import {createDriverFactory} from '../test-common';

const Header = () => (
  <div>header</div>
);

const Content = () => (
  <div>content</div>
);

describe('StickyPage', () => {
  const createDriver = createDriverFactory(stickyPageDriverFactory);
  const stickyPage = (
    <StickyPage>
      <StickyPage.Header>
        <Header/>
      </StickyPage.Header>
      <StickyPage.Content>
        <Content/>
      </StickyPage.Content>
    </StickyPage>
  );

  it('should initialize component', () => {
    const driver = createDriver(stickyPage);
    expect(driver.exists()).toBeTruthy();
  });

  describe('Bad Formats', () => {
    const Header = () => (
      <div>header</div>
    );

    let React;
    const stub = console.error = jest.fn();
    const createDriver = createDriverFactory(stickyPageDriverFactory);

    beforeEach(() => {
      React = require('react');
    });

    afterEach(() => {
      jest.resetModules();
      stub.mockReset();
    });

    it('should not initialize component without children', () => {
      const stickyPage = (
        <StickyPage/>
      );
      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: The prop `children` is marked as required in `StickyPage`, but its value is `undefined`.\n    in StickyPage');
    });

    it('should not initialize component with 1 bad child', () => {
      const stickyPage = (
        <StickyPage>
          <div/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: Invalid prop `children` of type `object` supplied to `StickyPage`, expected an array.\n    in StickyPage');
    });

    it('should not initialize component with 2 bad children', () => {
      const stickyPage = (
        <StickyPage>
          <div/>
          <div/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: StickyPage: Invalid Prop children, first child must be StickyPage.Header\n    in StickyPage');
    });

    it('should not initialize component with 3 bad children', () => {
      const stickyPage = (
        <StickyPage>
          <div/>
          <div/>
          <div/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: StickyPage: Invalid Prop children, first child must be StickyPage.Header, and second child must be StickyPage.Content\n    in StickyPage');
    });

    it('should not initialize component with only Header', () => {
      const stickyPage = (
        <StickyPage>
          <StickyPage.Header/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: Invalid prop `children` of type `object` supplied to `StickyPage`, expected an array.\n    in StickyPage');
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: The prop `children` is marked as required in `StickyPage.Header`, but its value is `undefined`.\n    in StickyPage.Header');
    });

    it('should not initialize component with only Content', () => {
      const stickyPage = (
        <StickyPage>
          <StickyPage.Content/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: Invalid prop `children` of type `object` supplied to `StickyPage`, expected an array.\n    in StickyPage');
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: The prop `children` is marked as required in `StickyPage.Content`, but its value is `undefined`.\n    in StickyPage.Content');
    });

    it('should not initialize component with empty Header and bad Content ', () => {
      const stickyPage = (
        <StickyPage>
          <StickyPage.Header/>
          <div/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: The prop `children` is marked as required in `StickyPage.Header`, but its value is `undefined`.\n    in StickyPage.Header');
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: StickyPage: Invalid Prop children, second child must be StickyPage.Content\n    in StickyPage');
    });

    it('should not initialize component with empty Content and bad Header', () => {
      const stickyPage = (
        <StickyPage>
          <div/>
          <StickyPage.Content/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: StickyPage: Invalid Prop children, first child must be StickyPage.Header\n    in StickyPage');
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: The prop `children` is marked as required in `StickyPage.Content`, but its value is `undefined`.\n    in StickyPage.Content');
    });

    it('should not initialize component with valid Header but Content has no children', () => {
      const stickyPage = (
        <StickyPage>
          <StickyPage.Header>
            <Header/>
          </StickyPage.Header>
          <StickyPage.Content/>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: The prop `children` is marked as required in `StickyPage.Content`, but its value is `undefined`.\n    in StickyPage.Content');
    });

    it('should not initialize component with valid Content but Header has no children', () => {
      const stickyPage = (
        <StickyPage>
          <StickyPage.Header/>
          <StickyPage.Content>
            <Content/>
          </StickyPage.Content>
        </StickyPage>
      );

      createDriver(stickyPage);
      expect(stub).toHaveBeenCalledWith('Warning: Failed prop type: The prop `children` is marked as required in `StickyPage.Header`, but its value is `undefined`.\n    in StickyPage.Header');
    });
  });
});


