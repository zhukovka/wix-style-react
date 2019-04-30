import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinearProgressBar.st.css';
import { LinearProgressBar as CoreLinearProgressBar } from 'wix-ui-core/linear-progress-bar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
//TODO: convert to WSR Tooltip
import { Tooltip } from 'wix-ui-backoffice/Tooltip';

//TODO: description of the component
/**
 * new LinearProgressBar component migrated from wix-ui-backoffice
 */
class LinearProgressBar extends React.PureComponent {
  static displayName = 'LinearProgressBar';

  static propTypes = {
    error: PropTypes.bool,

    /** Message to display when an error happens */
    errorMessage: PropTypes.string,

    /** Use light theme instead of dark theme */
    light: PropTypes.bool,

    showProgressIndication: PropTypes.bool,

    value: PropTypes.number,
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
