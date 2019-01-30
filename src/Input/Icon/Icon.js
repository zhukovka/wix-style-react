import React from 'react';
import PropTypes from 'prop-types';

import styles from './Icon.scss';

const Icon = ({ children }) => (
  <div className={styles.icon} data-hook="icon">
    {children}
  </div>
);

Icon.displayName = 'Input.Icon';
Icon.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Icon;
