import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './IconAffix.scss';
import InputConsumer from '../InputConsumer';

const IconAffix = ({ children }) => (
  <InputConsumer consumerCompName={IconAffix.displayName}>
    {({ size, inSuffix, onInputClicked, dataHook }) => {
      const className = classNames(styles.icon, {
        [styles.inSuffix]: inSuffix,
      });
      return (
        <div
          onClick={onInputClicked}
          className={className}
          data-hook={dataHook}
          data-icon={children.type.displayName}
        >
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
