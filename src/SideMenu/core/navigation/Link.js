import React from 'react';
import PropTypes from 'prop-types';
import LinkLayout from './LinkLayout';

const Link = ({children, isDiminishedHover, isActive, withArrow, ...rest}) =>
  <LinkLayout isDiminishedHover={isDiminishedHover} isActive={isActive} withArrow={withArrow}>
    <a data-hook="menu-navigation-link" {...rest}>
      {children}
    </a>
  </LinkLayout>;

Link.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  withArrow: PropTypes.bool,
  isDiminishedHover: PropTypes.bool
};

export default Link;
