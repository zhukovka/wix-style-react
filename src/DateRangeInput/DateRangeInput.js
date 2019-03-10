import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateRangeInput.scss';
import DateInput from '../DateInput/DateInput';
import classNames from 'classnames';

class DateRangeInput extends React.PureComponent {
  static displayName = 'DateRangeInput';

  static propTypes = {
    dataHook: PropTypes.string,
    ...DateInput.propTypes,
  };

  static defaultProps = {
    ...DateInput.defaultProps,
    value: {
      from: null,
      to: null,
    },
  };

  render () {
    const {
      dataHook,
      suffix,
      className,
      status,
      value,
      dateFormat,
      dateFromPlaceholder,
      dateToPlaceholder,
      onDateFromClicked,
      onDateToClicked,
    } = this.props;
    const containerClass = classNames (styles.root, className);
    const {from, to} = value || {};
    return (
      <div className={containerClass} data-hook={dataHook}>
        <DateInput
          dataHook="date-from-input"
          inputClassName={styles.input}
          className={styles.dateInput}
          onInputClicked={onDateFromClicked}
          placeholder={dateFromPlaceholder}
          hideSuffix
          status={status}
          dateFormat={dateFormat}
          value={from}
          suffix={null}
        />
        <DateInput
          dataHook="date-to-input"
          inputClassName={styles.input}
          className={styles.dateInput}
          value={to}
          status={status}
          placeholder={dateToPlaceholder}
          dateFormat={dateFormat}
          suffix={suffix}
          onInputClicked={onDateToClicked}
        />
      </div>
    );
  }
}

export default DateRangeInput;
