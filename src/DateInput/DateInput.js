import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateInput.scss';
import Input from '../Input';
import CalendarIcon from '../new-icons/Date';
import { formatDate } from '../LocaleUtils';
import classNames from 'classnames';

class DateInput extends React.PureComponent {
  static displayName = 'DateInput';
  static defaultProps = {
    locale: 'en',
    dateFormat: 'MM/DD/YYYY',
  };

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
      className,
      inputClassName,
      ...rest
    } = this.props;
    const _inputProps = {
      className: inputClassName,
      dataHook: inputDataHook || 'date-input-input',
      value: this._formatDateValue(initialValue),
      prefix: (
        <Input.IconAffix dataHook="date-input-date-icon">
          <CalendarIcon />
        </Input.IconAffix>
      ),
      autoSelect: false,
      ...rest,
      ...(customInput ? customInput.props : {}),
    };
    const containerClass = classNames(styles.root, className);
    return (
      <div data-hook={dataHook} className={containerClass}>
        {React.cloneElement(customInput || <Input />, _inputProps)}
      </div>
    );
  }
}

DateInput.propTypes = {
  ...Input.propTypes,
  /** The selected date */
  value: PropTypes.object,
  /** Instance locale */
  locale: PropTypes.oneOfType([
    PropTypes.oneOf([
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
    ]),
    PropTypes.shape({
      distanceInWords: PropTypes.object,
      format: PropTypes.object,
    }),
  ]),
  /** Custom date format, can be either:
   * * `string` of tokens (see [`date-fns` docs](https://date-fns.org/v1.29.0/docs/format) for list of supported tokens)
   * * `function` of signature `Date -> String`
   */
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default DateInput;
