import React from 'react';
import {node, bool} from 'prop-types';
import SideMenu from '../index';

const Link = ({children, isActive, ...rest}) => (
  <SideMenu.NavigationLinkLayout isActive={isActive} {...rest}>
    {children}
  </SideMenu.NavigationLinkLayout>
);

Link.defaultProps = {
  isActive: false
};

Link.propTypes = {
  children: node.isRequired,
  isActive: bool
};

export default Link;
