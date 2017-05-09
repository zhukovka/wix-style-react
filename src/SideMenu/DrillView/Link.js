import React from 'react';
import {node, bool, string} from 'prop-types';
import SideMenu from '../index';

const Link = ({children, to, isActive, ...rest}) => (
  <SideMenu.NavigationLink href={to} isActive={isActive} {...rest}>
    {children}
  </SideMenu.NavigationLink>
);

Link.defaultProps = {
  isActive: false
};

Link.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
  isActive: bool
};

export default Link;
