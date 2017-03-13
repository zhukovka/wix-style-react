import React, {PropTypes} from 'react';

import styles from './styles.scss';

const Navigation = ({children}) =>
  <div className={styles.navigation}>
    {children}
  </div>;

Navigation.propTypes = {
  children: PropTypes.node
};

export default Navigation;

