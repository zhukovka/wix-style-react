import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateRangeInput.scss';
import DateInput from '../DateInput/DateInput';
import classNames from 'classnames';
import Input from '../Input/Input';

class DateRangeInput extends React.PureComponent {
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
    status: PropTypes.oneOf([Input.StatusError, Input.StatusLoading]),
    /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
    statusMessage: PropTypes.node,
    /** when set to true this component is disabled */
    disabled: PropTypes.bool,
  };

  static InputFrom = 'from';
  static InputTo = 'to';

  static defaultProps = {
    ...DateInput.defaultProps,
    value: {
      from: null,
      to: null,
    },
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
    } = this.props;
    const containerClass = classNames(styles.root, className);
    const { from, to } = value || {};
    const generalProps = {
      status,
      dateFormat,
      disabled,
    };
    return (
      <div className={containerClass} data-hook={dataHook}>
        <DateInput
          {...generalProps}
          dataHook={`date-${DateRangeInput.InputFrom}-input`}
          inputClassName={styles.input}
          className={styles.dateInput}
          onInputClicked={onDateFromClicked}
          placeholder={dateFromPlaceholder}
          hideSuffix
          value={from}
          suffix={null}
        />
        <DateInput
          {...generalProps}
          dataHook={`date-${DateRangeInput.InputTo}-input`}
          inputClassName={styles.input}
          className={styles.dateInput}
          value={to}
          placeholder={dateToPlaceholder}
          suffix={suffix}
          onInputClicked={onDateToClicked}
          statusMessage={statusMessage}
        />
      </div>
    );
  }
}

export default DateRangeInput;
