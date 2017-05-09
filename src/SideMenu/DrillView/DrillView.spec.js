import React from 'react';
import {createDriverFactory} from '../../test-common';
import drillViewDriverFactory from './DrillView.driver';
import SideMenuDrill from './index';
import SideMenu from '../index';

describe('DrillView', () => {
  const linksPerLevel = 3;
  const subMenusPerLevel = 2;
  const createDriver = createDriverFactory(drillViewDriverFactory);
  const getHeader = level => `Level ${level} - Start`;
  const getFooter = level => `Level ${level} - End`;
  let onClickSpy;

  beforeEach(() => {
    onClickSpy = jest.fn();
  });

  function createLinksForLevel(level, activeLink) {
    const {activeLevel, activeIndex} = activeLink;
    const isLevelActive = activeLevel === level;

    return [...new Array(linksPerLevel)].map((_, i) => {
      return <SideMenuDrill.Link key={`${level}_${i}`} isActive={isLevelActive && activeIndex === i} to="//wix.com" onClick={onClickSpy}>Link {i}</SideMenuDrill.Link>;
    });
  }

  function createSubMenu(key, level, maxLevel, activeLink) {
    const menuKey = `${key}_${level}`;
    return (
      <SideMenuDrill.SubMenu key={menuKey} menuKey={menuKey} title={menuKey}>
        <SideMenu.Header>
          {getHeader(level)}
        </SideMenu.Header>
        <SideMenuDrill.Navigation>
          {createLinksForLevel(level, activeLink)}
          {createSubMenus(`${key}_${level}`, level + 1, maxLevel, activeLink)}
        </SideMenuDrill.Navigation>
        <SideMenu.Footer>
          {getFooter(level)}
        </SideMenu.Footer>
      </SideMenuDrill.SubMenu>
    );
  }

  function createSubMenus(key, level, maxLevel, activeLink) {
    if (level > maxLevel) {
      return <div/>;
    }

    return [...new Array(subMenusPerLevel)].map((_, i) => {
      return createSubMenu(key + i, level, maxLevel, activeLink);
    });
  }

  function createSideMenu(maxLevel, activeLink = {}) {
    return createDriver(
      <SideMenuDrill>
        <SideMenu.Header>
          {getHeader(0)}
        </SideMenu.Header>
        {createLinksForLevel(0, activeLink)}
        {createSubMenus('SubMenu', 1, maxLevel, activeLink)}
        <SideMenu.Footer>
          {getFooter(0)}
        </SideMenu.Footer>
      </SideMenuDrill>
    );
  }

  it('should render a one level drill view', () => {
    const driver = createSideMenu(0);

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().navigationLinks().length).toBe(linksPerLevel);
  });

  it('should render a one level drill view with an active item', () => {
    const activeLevel = 0;
    const activeIndex = 1;
    const driver = createSideMenu(0, {activeLevel, activeIndex});

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().isLinkActiveByIndex(activeIndex)).toBe(true);
  });

  it('should initially render the sub menu of the active link', () => {
    const activeLevel = 1;
    const activeIndex = 1;
    const driver = createSideMenu(1, {activeLevel, activeIndex});

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(1));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(1));
    expect(driver.getMenuDriver().hasBackLink()).toBe(true);
    expect(driver.getMenuDriver().isLinkActiveByIndex(activeIndex)).toBe(true);
  });

  it('should initially render the sub menu of the active link', () => {
    const activeLevel = 1;
    const activeIndex = 1;
    const driver = createSideMenu(1, {activeLevel, activeIndex});

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(1));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(1));
    expect(driver.getMenuDriver().hasBackLink()).toBe(true);
    expect(driver.getMenuDriver().isLinkActiveByIndex(activeIndex)).toBe(true);
    expect(driver.getMenuDriver().navigationCategoryContent(0)).toBe('SubMenu1_1');
  });

  it('should trigger first child link\'s click when clicking a sub menu', () => {
    const driver = createSideMenu(3);

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
    expect(driver.getMenuDriver().hasBackLink()).toBe(false);

    driver.getMenuDriver().clickLinkByIndex(3);

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should navigate to a parent menu and sub menu link should be active', done => {
    const activeLevel = 1;
    const activeIndex = 1;
    const driver = createSideMenu(1, {activeLevel, activeIndex});

    expect(driver.getMenuDriver().headerContent()).toBe(getHeader(1));
    expect(driver.getMenuDriver().footerContent()).toBe(getFooter(1));
    expect(driver.getMenuDriver().isLinkActiveByIndex(activeIndex)).toBe(true);
    expect(driver.getMenuDriver().hasBackLink()).toBe(true);

    driver.getMenuDriver().clickBackLink();

    setTimeout(() => {
      expect(driver.getMenuDriver().headerContent()).toBe(getHeader(0));
      expect(driver.getMenuDriver().footerContent()).toBe(getFooter(0));
      expect(driver.getMenuDriver().isLinkActiveByIndex(3)).toBe(true);
      done();
    }, 600);
  });
});
