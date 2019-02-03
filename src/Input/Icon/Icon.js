import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Icon.scss';
import InputConsumer from '../InputConsumer';

const IconAffix = ({ children }) => (
  <InputConsumer consumerCompName={IconAffix.displayName}>
    {({ size, inSuffix }) => {
      const className = classNames(styles.icon, {
        [styles.padRight]: inSuffix,
      });
      return (
        <div className={className} data-hook="icon">
          {React.cloneElement(children, {
            size: size === 'small' ? '18px' : '24px',
          })}
        </div>
      );
    }}
  </InputConsumer>
);

IconAffix.displayName = 'Input.IconAffix';
IconAffix.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IconAffix;
