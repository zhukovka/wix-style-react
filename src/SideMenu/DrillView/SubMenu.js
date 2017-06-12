import React, {Children} from 'react';
import {node, string, bool, func} from 'prop-types';
import Navigation from '../core/navigation';
import NavigationLink from '../core/navigation/Link';
import NavigationBackLink from '../core/navigation/BackLink';
import NavigationCategory from '../core/navigation/Category';
import SideMenuDrill from './index';

const SubMenu = ({children, title, isOpen, isActive, onSelectHandler, onBackHandler, backLabel, showCategory, withBadge}) => {
  if (!isOpen) {
    return (
      <NavigationLink isActive={isActive} onClick={onSelectHandler} withBadge={withBadge} withArrow>
        {title}
      </NavigationLink>
    );
  }

  const wrappedNavigation = Children.map(children, child => {
    if (child.type === SideMenuDrill.Navigation) {
      return (
        <div>
          <NavigationBackLink onBackHandler={onBackHandler}>{backLabel}</NavigationBackLink>
          {showCategory && <NavigationCategory>{title}</NavigationCategory>}
          <Navigation>
            {child.props.children}
          </Navigation>
        </div>
      );
    }

    return child;
  });

  return (
    <div data-hook="menu-drill-sub-menu">
      {wrappedNavigation}
    </div>
  );
};

SubMenu.defaultProps = {
  isActive: false,
  isOpen: false,
  onSelectHandler: () => {},
  onBackHandler: () => {},
  backLabel: 'Back',
  showCategory: true,
  withBadge: false
};

SubMenu.propTypes = {
  menuKey: string.isRequired,
  title: string.isRequired,
  isActive: bool,
  isOpen: bool,
  onSelectHandler: func,
  onBackHandler: func,
  backLabel: string,
  showCategory: bool,
  withBadge: bool,
  children: node.isRequired
};

export default SubMenu;
