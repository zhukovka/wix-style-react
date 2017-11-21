import React from 'react';
import Page from './Page';
import pageDriverFactory from './Page.driver';
import {createDriverFactory} from '../test-common';

const Header = () => (
  <div>header</div>
);

const Content = () => (
  <div>content</div>
);

const PageRequiredChildrenError = 'Warning: Failed prop type: The prop `children` is marked as required in `Page`, but its value is `undefined`.\n    in Page';
const PageRequiredChildrenArrayError = 'Warning: Failed prop type: Invalid prop `children` of type `object` supplied to `Page`, expected an array.\n    in Page';
const PageFirstChildHeaderError = 'Warning: Failed prop type: Page: Invalid Prop children, first child must be Page.Header\n    in Page';
const PageSecondChildContentError = 'Warning: Failed prop type: Page: Invalid Prop children, second child must be Page.Content\n    in Page';
const PageFirstAndSecondChildError = 'Warning: Failed prop type: Page: Invalid Prop children, first child must be Page.Header, and second child must be Page.Content\n    in Page';
const PageHeaderChildrenError = 'Warning: Failed prop type: The prop `children` is marked as required in `Page.Header`, but its value is `undefined`.\n    in Page.Header';
const PageContentChildrenError = 'Warning: Failed prop type: The prop `children` is marked as required in `Page.Content`, but its value is `undefined`.\n    in Page.Content';

describe('Page', () => {
  const createDriver = createDriverFactory(pageDriverFactory);
  const page = (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
        <Content/>
      </Page.Content>
    </Page>
  );

  it('should initialize component', () => {
    const driver = createDriver(page);
    expect(driver.exists()).toBeTruthy();
  });

  describe('Bad Formats', () => {
    const Header = () => (
      <div>header</div>
    );

    let React;
    const stub = console.error = jest.fn();
    const createDriver = createDriverFactory(pageDriverFactory);

    beforeEach(() => {
      React = require('react');
    });

    afterEach(() => {
      jest.resetModules();
      stub.mockReset();
    });

    it('should not initialize component without children', () => {
      const page = (
        <Page/>
      );
      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageRequiredChildrenError);
    });

    it('should not initialize component with 1 bad child', () => {
      const page = (
        <Page>
          <div/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageRequiredChildrenArrayError);
    });

    it('should not initialize component with 2 bad children', () => {
      const page = (
        <Page>
          <div/>
          <div/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageFirstChildHeaderError);
    });

    it('should not initialize component with 3 bad children', () => {
      const page = (
        <Page>
          <div/>
          <div/>
          <div/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageFirstAndSecondChildError);
    });

    it('should not initialize component with only Header', () => {
      const page = (
        <Page>
          <Page.Header/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageRequiredChildrenArrayError);
      expect(stub).toHaveBeenCalledWith(PageHeaderChildrenError);
    });

    it('should not initialize component with only Content', () => {
      const page = (
        <Page>
          <Page.Content/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageRequiredChildrenArrayError);
      expect(stub).toHaveBeenCalledWith(PageContentChildrenError);
    });

    it('should not initialize component with empty Header and bad Content ', () => {
      const page = (
        <Page>
          <Page.Header/>
          <div/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageHeaderChildrenError);
      expect(stub).toHaveBeenCalledWith(PageSecondChildContentError);
    });

    it('should not initialize component with empty Content and bad Header', () => {
      const page = (
        <Page>
          <div/>
          <Page.Content/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageFirstChildHeaderError);
      expect(stub).toHaveBeenCalledWith(PageContentChildrenError);
    });

    it('should not initialize component with valid Header but Content has no children', () => {
      const page = (
        <Page>
          <Page.Header>
            <Header/>
          </Page.Header>
          <Page.Content/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageContentChildrenError);
    });

    it('should not initialize component with valid Content but Header has no children', () => {
      const page = (
        <Page>
          <Page.Header/>
          <Page.Content>
            <Content/>
          </Page.Content>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(PageHeaderChildrenError);
    });
  });
});


