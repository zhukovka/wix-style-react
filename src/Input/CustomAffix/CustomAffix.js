import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './CustomAffix.scss';
import InputConsumer from '../InputConsumer';

const CustomAffix = ({ children, value }) => (
  <InputConsumer consumerCompName={CustomAffix.displayName}>
    {({ size, inSuffix, inPrefix, onInputClicked }) => {
      const className = classNames(styles.custom, {
        [styles.inSuffix]: inSuffix,
        [styles.inPrefix]: inPrefix,
        [styles.small]: size === 'small',
      });
      return (
        <div
          onClick={onInputClicked}
          className={className}
          data-hook="custom-affix"
        >
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
