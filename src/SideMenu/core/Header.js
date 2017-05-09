import React, {PropTypes} from 'react';
import styles from './styles.scss';

const Logo = ({onClick, children}) =>
  <button onClick={onClick} className={styles.logo} data-hook="menu-header">
    {children}
  </button>;

Logo.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Logo;

