import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Custom.scss';
import InputConsumer from '../InputConsumer';

const CustomAffix = ({ children, value }) => (
  <InputConsumer consumerCompName={CustomAffix.displayName}>
    {({ size, inSuffix, inPrefix }) => {
      const className = classNames(styles.custom, {
        [styles.inSuffix]: inSuffix,
        [styles.inPrefix]: inPrefix,
        [styles.small]: size === 'small',
      });
      return (
        <div className={className} data-hook="custom">
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
