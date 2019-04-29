import React from 'react';
import PageHeader from './PageHeader';
import pageHeaderDriverFactory from './PageHeader.driver';
import { pageHeaderUniDriverFactory } from './PageHeader.uni.driver';
import { PageHeaderPrivateDriver } from './PageHeader.private.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/react';
import Button from '../Button';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PropTypes from 'prop-types';

const generateBreadcrumbs = title => (
  <Breadcrumbs
    items={[{ id: '1', value: title }]}
    activeId="1"
    size="medium"
    theme="onGrayBackground"
    onClick={() => {}}
  />
);

const ActionBar = props => props.children;

const title = 'This is a title';
const subtitle = 'This is a subtitle';
const breadcrumbs = generateBreadcrumbs(title);
const actionsBar = (
  <ActionBar>
    <Button>Action</Button>
  </ActionBar>
);
const onBackClicked = () => {};

describe('PageHeader', () => {
  describe('render actionsBar using render props', () => {
    it('should not pass minimized and hasBackgroundImage props to element', async () => {
      const actionBarDiv = <div data-hook="action-bar-div" />;
      const pageHeader = (
        <PageHeader
          minimized
          hasBackgroundImage
          title={title}
          actionsBar={actionBarDiv}
        />
      );
      const driver = PageHeaderPrivateDriver.fromJsxElement(pageHeader);

      expect(await driver.existsByDataHook('action-bar-div')).toEqual(true);
      expect(await driver.propExists('action-bar-div', 'minimized')).toEqual(
        false,
      );
      expect(
        await driver.propExists('action-bar-div', 'hasBackgroundImage'),
      ).toEqual(false);
    });

    it('should pass minimized and hasBackgroundImage props to function', async () => {
      const actionBarDiv = ({ minimized, hasBackgroundImage }) =>
        minimized && hasBackgroundImage ? (
          <div data-hook="action-bar-with-props" />
        ) : (
          <div data-hook="action-bar-with-no-props" />
        );
      const pageHeader = (
        <PageHeader
          minimized
          hasBackgroundImage
          title={title}
          actionsBar={actionBarDiv}
        />
      );
      const driver = PageHeaderPrivateDriver.fromJsxElement(pageHeader);

      expect(await driver.existsByDataHook('action-bar-with-props')).toEqual(
        true,
      );
      expect(await driver.existsByDataHook('action-bar-with-no-props')).toEqual(
        false,
      );
    });
  });
  describe('[sync]', () => {
    runTests(createRendererWithDriver(pageHeaderDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(pageHeaderUniDriverFactory));
  });
});
function runTests(render) {
  afterEach(() => {
    cleanup();
  });

  it('should initialize component with title', async () => {
    const pageHeader = <PageHeader title={title} />;
    const { driver } = render(pageHeader);
    expect(await driver.titleText()).toBe(title);
    expect(await driver.isTitleExists()).toBeTruthy();
    expect(await driver.isSubtitleExists()).toBeFalsy();
    expect(await driver.isBreadcrumbsExists()).toBeFalsy();
  });

  it('should initialize component with minimized title', async () => {
    const pageHeader = <PageHeader minimized title={title} />;
    const { driver } = render(pageHeader);
    expect(await driver.isTitleExists()).toBeFalsy();
    expect(await driver.isSubtitleExists()).toBeFalsy();
    expect(await driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with title and subtitle', async () => {
    const pageHeader = <PageHeader title={title} subtitle={subtitle} />;
    const { driver } = render(pageHeader);
    expect(await driver.titleText()).toBe(title);
    expect(await driver.subtitleText()).toBe(subtitle);
    expect(await driver.isTitleExists()).toBeTruthy();
    expect(await driver.isSubtitleExists()).toBeTruthy();
    expect(await driver.isBreadcrumbsExists()).toBeFalsy();
  });

  it('should initialize component with title and subtitle with a special character', async () => {
    const someTextWithSpecialCharachters = 'tom & jerry';
    const pageHeader = (
      <PageHeader
        title={someTextWithSpecialCharachters}
        subtitle={someTextWithSpecialCharachters}
      />
    );
    const { driver } = render(pageHeader);
    expect(await driver.titleText()).toEqual(someTextWithSpecialCharachters);
    expect(await driver.subtitleText()).toEqual(someTextWithSpecialCharachters);
  });

  it('should initialize component with minimized title and subtitle', async () => {
    const pageHeader = (
      <PageHeader minimized title={title} subtitle={subtitle} />
    );
    const { driver } = render(pageHeader);
    expect(await driver.isTitleExists()).toBeFalsy();
    expect(await driver.isSubtitleExists()).toBeFalsy();
    expect(await driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with breadcrumbs and title', async () => {
    const pageHeader = <PageHeader breadcrumbs={breadcrumbs} title={title} />;
    const { driver } = render(pageHeader);
    expect(await driver.titleText()).toBe(title);
    expect(await driver.isTitleExists()).toBeTruthy();
    expect(await driver.isSubtitleExists()).toBeFalsy();
    expect(await driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with minimized breadcrumbs and title', async () => {
    const pageHeader = (
      <PageHeader minimized breadcrumbs={breadcrumbs} title={title} />
    );
    const { driver } = render(pageHeader);
    expect(await driver.isTitleExists()).toBeFalsy();
    expect(await driver.isSubtitleExists()).toBeFalsy();
    expect(await driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with breadcrumbs, title and subtitle', async () => {
    const pageHeader = (
      <PageHeader breadcrumbs={breadcrumbs} title={title} subtitle={subtitle} />
    );
    const { driver } = render(pageHeader);
    expect(await driver.titleText()).toBe(title);
    expect(await driver.subtitleText()).toBe(subtitle);
    expect(await driver.isTitleExists()).toBeTruthy();
    expect(await driver.isSubtitleExists()).toBeTruthy();
    expect(await driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with minimized breadcrumbs, title and subtitle', async () => {
    const pageHeader = (
      <PageHeader
        minimized
        breadcrumbs={breadcrumbs}
        title={title}
        subtitle={subtitle}
      />
    );
    const { driver } = render(pageHeader);
    expect(await driver.isTitleExists()).toBeFalsy();
    expect(await driver.isSubtitleExists()).toBeFalsy();
    expect(await driver.isBreadcrumbsExists()).toBeTruthy();
  });

  it('should initialize component with title and actionsBar', async () => {
    const pageHeader = <PageHeader title={title} actionsBar={actionsBar} />;
    const { driver } = render(pageHeader);
    expect(await driver.isActionBarExists()).toBeTruthy();
  });

  it('should initialize component with minimized title and actionsBar', async () => {
    const pageHeader = (
      <PageHeader minimized title={title} actionsBar={actionsBar} />
    );
    const { driver } = render(pageHeader);
    expect(await driver.isActionBarExists()).toBeTruthy();
  });

  it('should initialize component with title and back button without callback', async () => {
    const pageHeader = <PageHeader title={title} showBackButton />;
    const { driver } = render(pageHeader);
    expect(await driver.isBackButtonExists()).toBeFalsy();
  });

  it('should initialize component with title and back button callback', async () => {
    const pageHeader = (
      <PageHeader title={title} onBackClicked={onBackClicked} />
    );
    const { driver } = render(pageHeader);
    expect(await driver.isBackButtonExists()).toBeFalsy();
  });

  it('should initialize component with title and back button callback and back button', async () => {
    const pageHeader = (
      <PageHeader title={title} showBackButton onBackClicked={onBackClicked} />
    );
    const { driver } = render(pageHeader);
    expect(await driver.isBackButtonExists()).toBeTruthy();
  });

  it('should initialize component with minimized title and back button callback and back button', async () => {
    const pageHeader = (
      <PageHeader
        minimized
        title={title}
        showBackButton
        onBackClicked={onBackClicked}
      />
    );
    const { driver } = render(pageHeader);
    expect(await driver.isBackButtonExists()).toBeFalsy();
  });

  it('should execute the given back button callback once the back button is clicked', async () => {
    const backButtonCallback = jest.fn();
    const pageHeader = (
      <PageHeader
        title={title}
        showBackButton
        onBackClicked={backButtonCallback}
      />
    );
    const { driver } = render(pageHeader);
    await driver.clickBackButton();

    expect(backButtonCallback).toBeCalledTimes(1);
  });

  it('should have custom className', async () => {
    const pageHeader = <PageHeader title={title} className="myClass" />;
    const { driver } = render(pageHeader);
    expect(await driver.hasClass('myClass')).toBeTruthy();
  });

  describe('should initialize component with render props title', () => {
    const altTitle = 'This is a different title';
    const HeaderTitleComponent = props => (
      <span>{props.minimized ? altTitle : title}</span>
    );
    HeaderTitleComponent.propTypes = { minimized: PropTypes.bool };

    it('not minimized', async () => {
      const pageHeader = (
        <PageHeader
          title={minimized => <HeaderTitleComponent minimized={minimized} />}
        />
      );
      const { driver } = render(pageHeader);
      expect(await driver.titleText()).toBe(title);
      expect(await driver.isTitleExists()).toBeTruthy();
      expect(await driver.isSubtitleExists()).toBeFalsy();
      expect(await driver.isBreadcrumbsExists()).toBeFalsy();
    });

    it('minimized with breadcrumbs', async () => {
      const pageHeader = (
        <PageHeader
          minimized
          breadcrumbs={breadcrumbs}
          title={minimized => <HeaderTitleComponent minimized={minimized} />}
        />
      );
      const { driver } = render(pageHeader);
      expect(await driver.isTitleExists()).toBeFalsy();
      expect(await driver.isSubtitleExists()).toBeFalsy();
      expect(await driver.isBreadcrumbsExists()).toBeTruthy();
    });

    it('minimized without breadcrumbs', async () => {
      const pageHeader = (
        <PageHeader
          minimized
          title={minimized => <HeaderTitleComponent minimized={minimized} />}
        />
      );
      const { driver } = render(pageHeader);
      expect(await driver.isTitleExists()).toBeFalsy();
      expect(await driver.isSubtitleExists()).toBeFalsy();
      expect(await driver.isBreadcrumbsExists()).toBeTruthy();
      expect(await driver.breadcrumbsText()).toBe(altTitle);
    });
  });
}
