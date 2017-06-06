import React, {Children} from 'react';
import {string, node} from 'prop-types';
import WixComponent from '../../WixComponent';
import SideMenu from '../index';
import {SlideAnimation} from '../../Animations';
import {SlideDirection} from '../../Animations/SlideAnimation';
import styles from './DrillView.scss';

class SideMenuDrill extends WixComponent {
  constructor(props) {
    super(props);

    const state = {
      menus: {},
      activeMenus: {},
      currentMenuId: this.props.menuKey,
      previousMenuId: null,
      showMenuA: true,
      slideDirection: SlideDirection.left
    };

    this.processChildren({props: this.props}, state);
    this.state = state;
  }

  componentWillReceiveProps(nextProps) {
    const state = {
      menus: {},
      activeMenus: {}
    };

    this.processChildren({props: nextProps}, state);
    this.setState(state);
  }

  setSelectedItemMenu(selectedItemMenuId, state) {
    // initial selected menu
    if (!this.state) {
      Object.assign(state, {currentMenuId: selectedItemMenuId, selectedItemMenuId});
      return;
    }

    // returning to an already selected menu item (force nav)
    if (this.lastClickedMenuKey === selectedItemMenuId) {
      this.navigateToMenu(selectedItemMenuId, SlideDirection.left);
      this.lastClickedMenuKey = null;
    }

    if (this.state.selectedItemMenuId === selectedItemMenuId) {
      return;
    }

    this.setState({selectedItemMenuId});
    if (this.state.currentMenuId !== selectedItemMenuId) {
      this.navigateToMenu(selectedItemMenuId, SlideDirection.left); // TODO: calculate if needs to slide left or right
    }
  }

  navigateToMenu(nextMenuId, slideDirection) {
    const previousMenuId = this.state.currentMenuId;
    const showMenuA = !this.state.showMenuA;
    this.setState({currentMenuId: nextMenuId, previousMenuId, showMenuA, slideDirection});
  }

  clickFirstClickableChild(item, event) {
    let found = false;
    if (item.props.onClick) {
      item.props.onClick(event);
      return true;
    }

    Children.forEach(item.props.children, child => {
      if (!found && child.props) {
        found = this.clickFirstClickableChild(child, event);
      }
    });
    return found;
  }

  selectFirstLinkChild(menu, event) {
    let found = false;
    Children.forEach(menu.props.children, child => {
      if (!found && child.type === SideMenuDrill.Link) {
        this.clickFirstClickableChild(child, event);
        found = true;
      }

      if (!found && child.props && child.props.children) {
        this.selectFirstLinkChild(child, event);
      }
    });
  }

  alterMenu(menu, childrenClone, parentMenuKey, isActive) {
    const defaultSubMenProps = {
      isOpen: false,
      onSelectHandler: event => {
        this.lastClickedMenuKey = menu.props.menuKey;
        this.selectFirstLinkChild(menu, event);
      },
      onBackHandler: () => {
        this.navigateToMenu(parentMenuKey, SlideDirection.right);
      },
      isActive
    };

    return React.cloneElement(menu, defaultSubMenProps, childrenClone);
  }

  cloneSubMenu(menu, state, parentMenuKey, childrenClone) {
    const isMenuActive = state.activeMenus[menu.props.menuKey];
    if (isMenuActive) {
      state.activeMenus[parentMenuKey] = true;
    }

    const menuClone = this.alterMenu(menu, childrenClone, parentMenuKey, isMenuActive);
    state.menus[menuClone.props.menuKey] = menuClone;
    return menuClone;
  }

  cloneChild(menu, state, parentMenuKey, childrenClone) {
    if (menu.type === SideMenuDrill.Link && menu.props.isActive) {
      this.setSelectedItemMenu(parentMenuKey, state);
      state.activeMenus[parentMenuKey] = true;
    }

    if (menu.props.menuKey) {
      return this.cloneSubMenu(menu, state, parentMenuKey, childrenClone);
    }

    return React.cloneElement(menu, {}, childrenClone);
  }

  processChildren(menu, state, parentMenuKey) {
    const childrenClone = Children.map(menu.props.children, child => {
      if (child.props && child.props.children) {
        const menuKey = menu.props.menuKey || parentMenuKey;
        return this.processChildren(child, state, menuKey);
      }

      return child;
    });

    return this.cloneChild(menu, state, parentMenuKey, childrenClone);
  }

  renderNavigation(menu) {
    if (menu.props.menuKey === this.props.menuKey) {
      // Render root items
      return menu.props.children;
    }

    // Render open SubMenu
    return React.cloneElement(menu, {isOpen: true});
  }

  renderMenu(menu) {
    return (
      <div className={styles.drillViewPanel}>
        {this.renderNavigation(menu)}
      </div>
    );
  }

  render() {
    const {menus, currentMenuId, previousMenuId, showMenuA} = this.state;
    const menuAId = showMenuA ? currentMenuId : previousMenuId;
    const menuBId = showMenuA ? previousMenuId : currentMenuId;

    const menuA = menuAId && menus[menuAId];
    const menuB = menuBId && menus[menuBId];

    return (
      <SideMenu dataHook="drill-view">
        <div className={styles.drillViewContainer}>
          <SlideAnimation direction={this.state.slideDirection} animateAppear={false}>
            { showMenuA ? this.renderMenu(menuA) : null }
          </SlideAnimation>
          <SlideAnimation direction={this.state.slideDirection} animateAppear={false}>
            { !showMenuA ? this.renderMenu(menuB) : null }
          </SlideAnimation>
        </div>
      </SideMenu>
    );
  }
}

SideMenuDrill.defaultProps = {
  menuKey: 'root'
};

SideMenuDrill.propTypes = {
  menuKey: string,
  children: node
};

export default SideMenuDrill;
