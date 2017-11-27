import React from 'react';
import PageHeader from './PageHeader';
import pageHeaderDriverFactory from './PageHeader.driver';
import {createDriverFactory} from '../test-common';
import Button from '../Button';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const generateDefaultBreadcrumbs = title =>
  <Breadcrumbs
    items={[{id: '1', value: title}]}
    activeId="1"
    size="medium"
    theme="onGrayBackground"
    onClick={() => {}}
    />;

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

  it('should initialize component with title and actionsBar', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader title={title} actionsBar={(<Button>Action</Button>)}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isActionBarExists()).toBeTruthy();
  });

  it('should initialize component with minimized title and actionsBar', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader minimized title={title} actionsBar={(<Button>Action</Button>)}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isActionBarExists()).toBeTruthy();
  });

  it('should initialize component with title and back button without callback', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader title={title} showBackButton/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeFalsy();
  });

  it('should initialize component with title and back button callback', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader title={title} onBackClicked={() => {}}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeFalsy();
  });

  it('should initialize component with title and back button callback and back button', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader title={title} showBackButton onBackClicked={() => {}}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeTruthy();
  });

  it('should initialize component with minimized title and back button callback and back button', () => {
    const title = 'This is a title';
    const pageHeader = <PageHeader minimized title={title} showBackButton onBackClicked={() => {}}/>;
    const driver = createDriver(pageHeader);
    expect(driver.isBackButtonExists()).toBeFalsy();
  });
});
