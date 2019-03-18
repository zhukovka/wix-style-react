import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateRangeInput.scss';
import DateInput from '../DateInput/DateInput';
import classNames from 'classnames';
import Input from '../Input/Input';
import { DateRangeInputTypes } from './DateRangeInputTypes';

class DateRangeInput extends React.Component {
  static displayName = 'DateRangeInput';

  static propTypes = {
    dataHook: PropTypes.string,
    /** The selected dates object */
    value: PropTypes.shape({
      from: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    }),
    /** Placeholder for date from input */
    dateFromPlaceholder: PropTypes.string,
    /** Placeholder for date to input */
    dateToPlaceholder: PropTypes.string,
    /** Input status - use to display an status indication for the user. for example: 'error' or 'loading' */
    status: PropTypes.oneOf([Input.StatusError]),
    /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
    statusMessage: PropTypes.node,
    /** when set to true this component is disabled */
    disabled: PropTypes.bool,
    /** Standard component tabIndex */
    tabIndex: PropTypes.number,
  };

  static InputFrom = DateRangeInputTypes.from;
  static InputTo = DateRangeInputTypes.to;

  static defaultProps = {
    ...DateInput.defaultProps,
    value: {
      from: null,
      to: null,
    },
  };

  state = {
    focus: null,
  };
  _onFocus = inputType => e => {
    this.setState({ focus: inputType });
  };

  render() {
    const {
      dataHook,
      suffix,
      disabled,
      className,
      status,
      value,
      dateFormat,
      dateFromPlaceholder,
      dateToPlaceholder,
      onDateFromClicked,
      onDateToClicked,
      statusMessage,
      tabIndex,
    } = this.props;
    const containerClass = classNames(styles.root, className);
    const { from, to } = value || {};
    const generalProps = {
      status,
      dateFormat,
      disabled,
      tabIndex,
    };
    const dateFromClass = classNames(styles.input, styles.dateFrom, {
      [styles.focused]: this.state.focus === DateRangeInputTypes.from,
    });
    const dateToClass = classNames(styles.input, styles.dateTo, {
      [styles.focused]: this.state.focus === DateRangeInputTypes.to,
    });
    return (
      <div className={containerClass} data-hook={dataHook}>
        <DateInput
          {...generalProps}
          dataHook={`date-${DateRangeInput.InputFrom}-input`}
          className={dateFromClass}
          onInputClicked={onDateFromClicked}
          placeholder={dateFromPlaceholder}
          hideSuffix
          value={from}
          suffix={null}
          onFocus={this._onFocus(DateRangeInputTypes.from)}
        />
        <DateInput
          {...generalProps}
          dataHook={`date-${DateRangeInput.InputTo}-input`}
          className={dateToClass}
          value={to}
          placeholder={dateToPlaceholder}
          suffix={suffix}
          onInputClicked={onDateToClicked}
          statusMessage={statusMessage}
          onFocus={this._onFocus(DateRangeInputTypes.to)}
        />
      </div>
    );
  }
}

export default DateRangeInput;
