import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';
import DataPickerArrow from '../../../Icons/dist/components/DataPickerArrow';

const LinkLayout = ({children, isDiminishedHover, isActive, withArrow, ...rest}) =>
  <span
    className={classnames({
      [styles.linkLayout]: true,
      [styles.linkActive]: isActive,
      [styles.linkDiminishedHover]: isDiminishedHover
    })}
    data-hook="menu-navigation-link-wrapper"
    {...rest}
    >
    {children}
    {withArrow && <span className={styles.linkArrow}><DataPickerArrow/></span>}
  </span>;

LinkLayout.defaultProps = {
  withArrow: false
};

LinkLayout.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  withArrow: PropTypes.bool,
  isDiminishedHover: PropTypes.bool
};

export default LinkLayout;
