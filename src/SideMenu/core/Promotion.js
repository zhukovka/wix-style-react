import React, {PropTypes} from 'react';
import styles from './styles.scss';

const Promotion = ({children}) =>
  <div className={styles.promotion} data-hook="menu-promotion">
    {children}
  </div>;

Promotion.propTypes = {
  children: PropTypes.node
};

export default Promotion;

