import React, {PropTypes} from 'react';

import styles from './Unit.scss';

const Unit = ({children, value}) =>
  <div
    className={styles.root}
    data-hook="unit"
    >
    {value || children}
  </div>;

Unit.displayName = 'Input.Unit';
Unit.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string
};

export default Unit;
