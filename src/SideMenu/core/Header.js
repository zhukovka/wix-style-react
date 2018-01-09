import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Logo = ({onClick, children}) =>
  <button type="button" onClick={onClick} className={styles.logo} data-hook="menu-header">
    {children}
  </button>;

Logo.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Logo;

