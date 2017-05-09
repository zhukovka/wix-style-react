import React, {PropTypes} from 'react';
import styles from './styles.scss';

const Footer = ({children}) =>
  <div className={styles.footer} data-hook="menu-footer">
    {children}
  </div>;

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

