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

  render() {
    const {
      dataHook,
      className,
      value,
      dateFormat,
      onDateFromClicked,
      onDateToClicked,
    } = this.props;
    const containerClass = classNames(styles.root, className);
    return (
      <div className={containerClass} data-hook={dataHook}>
        <DateInput
          dataHook="date-from-input"
          inputClassName={styles.input}
          className={styles.dateInput}
          onInputClicked={onDateFromClicked}
          placeholder="From"
          hideSuffix
          dateFormat={dateFormat}
          value={value.from}
          suffix={null}
        />
        <DateInput
          dataHook="date-to-input"
          inputClassName={styles.input}
          className={styles.dateInput}
          value={value.to}
          placeholder="To"
          dateFormat={dateFormat}
          onInputClicked={onDateToClicked}
        />
      </div>
    );
  }
}

export default DateRangeInput;
