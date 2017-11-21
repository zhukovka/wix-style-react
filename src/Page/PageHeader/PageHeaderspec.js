import React from 'react';
import {PageHeader, generateDefaultBreadcrumbs} from './PageHeader';
import pageHeaderDriverFactory from './PageHeader.driver';
import {createDriverFactory} from '../../test-common';

describe('PageHeader', () => {
  const createDriver = createDriverFactory(pageHeaderDriverFactory);

  it('should initialize component with title', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeFalsy();
  });

  it('should initialize component with minimized title', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader minimized title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with title and subtitle', () => {
    const title = 'This is a title';
    const subtitle = 'This is a subtitle';
    const pageHeader = <PageHeader title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.subtitleText()).toBe(subtitle);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeTruthy();
    expect(driver.isBreadcrumbsExists()).toBeFalsy();
  });

  it('should initialize component with minimized title and subtitle', () => {
    const title = 'This is a title';
    const subtitle = 'This is a subtitle';
    const pageHeader = <PageHeader minimized title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with breadcrumbs and title', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader breadcrumbs={generateDefaultBreadcrumbs(title)} title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with minimized breadcrumbs and title', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader minimized breadcrumbs={generateDefaultBreadcrumbs(title)} title={title}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with breadcrumbs, title and subtitle', () => {
    const title = 'This is a title';
    const subtitle = 'This is a subtitle';
    const pageHeader = <PageHeader breadcrumbs={generateDefaultBreadcrumbs(title)} title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.titleText()).toBe(title);
    expect(driver.subtitleText()).toBe(subtitle);
    expect(driver.isTitleExists()).toBeTruthy();
    expect(driver.isSubtitleExists()).toBeTruthy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with minimized breadcrumbs, title and subtitle', () => {
    const title = 'This is a title';
    const subtitle = 'This is a subtitle';
    const pageHeader = <PageHeader minimized breadcrumbs={generateDefaultBreadcrumbs(title)} title={title} subtitle={subtitle}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isTitleExists()).toBeFalsy();
    expect(driver.isSubtitleExists()).toBeFalsy();
    expect(driver.isBreadcrumbsExists()).toBeTruthy();
  });
});
