import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinearProgressBar.st.css';
import { LinearProgressBar as CoreLinearProgressBar } from 'wix-ui-core/linear-progress-bar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
//TODO: convert to WSR Tooltip
import { Tooltip } from 'wix-ui-backoffice/Tooltip';

/**
 * This component is used for indicating a progress along a process.*/
class LinearProgressBar extends React.PureComponent {
  static displayName = 'LinearProgressBar';

  static propTypes = {
    /** Use to apply error styles*/
    error: PropTypes.bool,

    /** Message to display when an error happens */
    errorMessage: PropTypes.string,

    /** Use light theme instead of dark theme */
    light: PropTypes.bool,

    /** Use to display a percentage progress.*/
    showProgressIndication: PropTypes.bool,

    /** The number of the percentage progress */
    value: PropTypes.number || PropTypes.string,
  };

  render() {
    const { errorMessage, light, dataHook, ...otherProps } = this.props;

    return (
      <CoreLinearProgressBar
        data-hook={dataHook}
        {...styles('root', { light }, this.props)}
        {...otherProps}
        successIcon={<ToggleOn />}
        errorIcon={
          <Tooltip
            data-hook="linear-progressbar-tooltip"
            placement="top"
            content={errorMessage}
          >
            <FormFieldError data-hook="error-icon" />
          </Tooltip>
        }
      />
    );
  }
}

export default LinearProgressBar;
