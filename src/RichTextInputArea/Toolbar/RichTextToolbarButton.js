import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './RichTextToolbarButton.scss';
import Tooltip from '../../Tooltip';

const RichTextToolbarButton = ({
  dataHook,
  onClick,
  tooltipText,
  isActive,
  isDisabled,
  children,
}) => (
  <Tooltip content={tooltipText} theme="dark">
    <button
      data-hook={dataHook}
      className={classNames(
        styles.button,
        isDisabled && styles.disabled,
        !isDisabled && isActive && styles.active,
      )}
      onClick={!isDisabled && onClick}
    >
      {children}
    </button>
  </Tooltip>
);

export default RichTextToolbarButton;
