import React from 'react';
import {node, bool} from 'prop-types';
import NavigationLinkLayout from '../core/navigation/LinkLayout';

const Link = ({children, isActive, ...rest}) => (
  <NavigationLinkLayout isActive={isActive} {...rest}>
    {children}
  </NavigationLinkLayout>
);

Link.defaultProps = {
  isActive: false
};

Link.propTypes = {
  children: node.isRequired,
  isActive: bool
};

export default Link;
