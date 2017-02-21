import React, {PropTypes} from 'react';

import styles from './Input.scss';

const InputPrefix = ({prefixes}) =>
  <div className={styles.prefixes}>
    { prefixes.map((p, i) =>
      <div key={i} className={styles.prefix}>
        {p.component()}
      </div>
    )}
  </div>;

InputPrefix.propTypes = {
  prefixes: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
  }))
};

export default InputPrefix;

