import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';

import Tooltip from '../Tooltip';
import styles from './Input.scss';

class InputErrorSuffix extends React.Component {
  render() {
    return (
      <Tooltip
        dataHook="input-tooltip"
        disabled={this.props.errorMessage.length === 0}
        placement={this.props.tooltipPlacement}
        alignment="center"
        textAlign="left"
        content={this.props.errorMessage}
        overlay=""
        theme="dark"
        maxWidth="230px"
        hideDelay={150}
        zIndex={10000}
        >
        <div className={styles.exclamation}><FormFieldError/></div>
      </Tooltip>
    );
  }
}

InputErrorSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  errorMessage: PropTypes.string.isRequired,
  focused: PropTypes.bool,
  tooltipPlacement: PropTypes.string
};

export default InputErrorSuffix;
