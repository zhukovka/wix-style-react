import React, {PropTypes} from 'react';

import styles from './Unit.scss';

const Unit = ({children}) =>
  <div className={styles.root} data-hook="unit">{children}</div>;

Unit.propTypes = {
  children: PropTypes.node
};

export default Unit;
