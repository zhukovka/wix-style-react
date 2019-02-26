import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateInput.scss';
import Input from '../Input';
import CalendarIcon from '../new-icons/Date';
import { formatDate } from '../LocaleUtils';

class DateInput extends React.PureComponent {
  static displayName = 'DateInput';

  _formatDateValue = () => {
    const { value, dateFormat, locale } = this.props;

    if (!value) {
      return '';
    }

    if (typeof dateFormat === 'function') {
      return dateFormat(value);
    }

    return formatDate(value, dateFormat, locale);
  };

  render() {
    const {
      inputDataHook,
      value: initialValue,
      customInput,
      dataHook,
      ...rest
    } = this.props;
    const _inputProps = {
      dataHook: inputDataHook,
      value: this._formatDateValue(initialValue),
      prefix: (
        <Input.IconAffix>
          <CalendarIcon />
        </Input.IconAffix>
      ),
      autoSelect: false,
      ...rest,
      ...(customInput ? customInput.props : {}),
    };
    return (
      <div data-hook={dataHook} className={styles.root}>
        {React.cloneElement(customInput || <Input />, _inputProps)}
      </div>
    );
  }
}

DateInput.propTypes = {
  ...Input.propTypes,
};

export default DateInput;
