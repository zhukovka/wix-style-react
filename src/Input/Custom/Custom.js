import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Custom.scss';

const Custom = ({ children, value, isInGroup }) => {
  const className = classNames(styles.custom, {
    [styles.inGroup]: !!isInGroup,
  });
  return (
    <div className={className} data-hook="custom">
      {value || children}
    </div>
  );
};

Custom.displayName = 'Input.Icon';
Custom.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
};

export default Custom;
