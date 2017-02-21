import React, {PropTypes} from 'react';

import styles from './Input.scss';

const InputSuffix = ({suffixes}) =>
  <div className={styles.suffixes}>
    { suffixes.map((s, i) =>
      <div key={i} className={styles.suffix}>
        {s.component()}
      </div>
    )}
  </div>;

InputSuffix.propTypes = {
  suffixes: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
  }))
};

export default InputSuffix;

