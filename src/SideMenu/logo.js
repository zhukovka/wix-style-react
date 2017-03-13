import React, {PropTypes} from 'react';

import styles from './styles.scss';

const Logo = ({onClick, children}) =>
  <button onClick={onClick} className={styles.logo}>
    {children}
  </button>;

Logo.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Logo;

