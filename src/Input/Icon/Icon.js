import React from 'react';
import PropTypes from 'prop-types';

import styles from './Icon.scss';
import InputConsumer from '../InputConsumer';

const IconAffix = ({ children }) => (
  <InputConsumer consumerCompName={IconAffix.displayName}>
    {prop => (
      <div className={styles.icon} data-hook="icon">
        {children}
      </div>
    )}
  </InputConsumer>
);

IconAffix.displayName = 'Input.IconAffix';
IconAffix.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IconAffix;
