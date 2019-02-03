import React from 'react';
import PropTypes from 'prop-types';

import styles from './Custom.scss';
import InputConsumer from '../InputConsumer';

const CustomAffix = ({ children, value }) => (
  <InputConsumer consumerCompName={CustomAffix.displayName}>
    {({ size }) => {
      return (
        <div className={styles.custom} data-hook="custom">
          {value || children}
        </div>
      );
    }}
  </InputConsumer>
);

CustomAffix.displayName = 'Input.CustomAffix';
CustomAffix.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
};
export default CustomAffix;
