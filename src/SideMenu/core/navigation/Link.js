import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './styles.scss';
import {DataPickerArrow} from '../../../Icons/dist';

const Link = ({children, isDiminishedHover, isActive, withArrow, ...rest}) =>
  <a
    className={classnames({
      [styles.link]: true,
      [styles.linkActive]: isActive,
      [styles.linkDiminishedHover]: isDiminishedHover
    })}
    data-hook="menu-navigation-link"
    {...rest}
    >
    {children}
    {withArrow && <span className={styles.linkArrow}><DataPickerArrow/></span>}
  </a>;

Link.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  withArrow: PropTypes.bool,
  isDiminishedHover: PropTypes.bool
};

export default Link;
