import React from 'react';
import styles from './styles.scss';
import {bool} from 'prop-types';
import classnames from 'classnames';

const Badge = ({inline}) => {
  const className = classnames({
    [styles.linkBadge]: true,
    [styles.inlineLinkBadge]: inline,
    [styles.fixedLinkBadge]: !inline
  });

  return <span className={className} data-hook="menu-navigation-badge"/>;
};

Badge.defaultProps = {
  inline: false
};

Badge.propTypes = {
  inline: bool
};

export default Badge;
