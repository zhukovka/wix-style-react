import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from '../new-icons/system/FormFieldError';
import Tooltip from '../Tooltip';
import styles from './ErrorIndicator.scss';

export const tooltipDataHook = 'error-indicator-tooltip';

// This component was exported out of <InputArea/>
// TODO: Add tests and docs
const ErrorIndicator = ({
  dataHook,
  errorMessage,
  tooltipPlacement,
  onTooltipShow,
}) => (
  <div data-hook={dataHook} className={styles.suffix}>
    <Tooltip
      dataHook={tooltipDataHook}
      disabled={errorMessage.length === 0}
      placement={tooltipPlacement}
      onShow={onTooltipShow}
      alignment="center"
      hideDelay={100}
      content={errorMessage}
      moveBy={{ x: 0, y: -10 }}
      overlay=""
      maxWidth="250px"
      textAlign="left"
      theme="dark"
      appendToParent
    >
      <div className={styles.errorIcon}>
        <FormFieldError />
      </div>
    </Tooltip>
  </div>
);

ErrorIndicator.defaultProps = {
  errorMessage: '',
  tooltipPlacement: 'top',
};

ErrorIndicator.propTypes = {
  errorMessage: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
  onTooltipShow: PropTypes.func,
};

export default ErrorIndicator;
