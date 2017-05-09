import React, {PropTypes} from 'react';

import styles from './styles.scss';

const Separator = ({children}) =>
  <div className={styles.separator} data-hook="menu-navigation-separator">
    {children}
  </div>;

Separator.propTypes = {
  children: PropTypes.node
};

export default Separator;

