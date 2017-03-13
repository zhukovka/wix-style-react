import React, {PropTypes} from 'react';

import styles from './styles.scss';

const SideMenu = ({children}) =>
  <div className={styles.root}>
    {children}
  </div>;

SideMenu.propTypes = {
  children: PropTypes.node
};

export default SideMenu;

