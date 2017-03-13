import React, {PropTypes} from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Link = ({children, isDiminishedHover, isActive, ...rest}) =>
  <a
    className={classnames({
      [styles.link]: true,
      [styles.linkActive]: isActive,
      [styles.linkDiminishedHover]: isDiminishedHover
    })}
    {...rest}
    >
    {children}
  </a>;

Link.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  isDiminishedHover: PropTypes.bool
};

export default Link;

