import React from 'react';
import {bool, node, string} from 'prop-types';
import LinkLayout from './LinkLayout';

const Link = ({children, isDiminishedHover, isActive, withArrow, badge, dataHook, ...rest}) =>
  <LinkLayout isDiminishedHover={isDiminishedHover} isActive={isActive} withArrow={withArrow}>
    <a data-hook={dataHook} {...rest}>
      {children}
      {badge}
    </a>
  </LinkLayout>;

Link.defaultProps = {
  dataHook: 'menu-navigation-link'
};

Link.propTypes = {
  children: node,
  isActive: bool,
  withArrow: bool,
  badge: node,
  isDiminishedHover: bool,
  dataHook: string
};

export default Link;
