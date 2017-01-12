import React, {PropTypes} from 'react';

import styles from './Input.scss';

const InputPrefix = ({children}) =>
  <div className={styles.prefix}>{children}</div>;

InputPrefix.propTypes = {
  children: PropTypes.node
};

export default InputPrefix;
