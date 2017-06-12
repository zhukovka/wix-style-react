import React from 'react';
import Badge from './Badge';
import PropTypes from 'prop-types';
import LinkLayout from './LinkLayout';

const Link = ({children, isDiminishedHover, isActive, withArrow, withBadge, ...rest}) =>
  <LinkLayout isDiminishedHover={isDiminishedHover} isActive={isActive} withArrow={withArrow}>
    <a data-hook="menu-navigation-link" {...rest}>
      {children}
      {withBadge && <Badge/>}
    </a>
  </LinkLayout>;

Link.defaultProps = {
  withBadge: false
};

Link.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  withArrow: PropTypes.bool,
  withBadge: PropTypes.bool,
  isDiminishedHover: PropTypes.bool
};

export default Link;
