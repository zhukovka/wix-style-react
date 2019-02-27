import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateInput.scss';
import Input from '../Input';
import CalendarIcon from '../new-icons/Date';
import { formatDate, parseDate } from '../LocaleUtils';
import { IMaskMixin } from 'react-imask';
import * as IMask from 'imask';

export const formatBlocks = {
  YYYY: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 2030,
  },
  MM: {
    mask: IMask.MaskedRange,
    from: 1,
    to: 12,
  },
  DD: {
    mask: IMask.MaskedRange,
    from: 1,
    to: 31,
  },
  HH: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 23,
  },
  mm: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 59,
  },
};

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

  format = date => {
    const { dateFormat, locale } = this.props;
    return formatDate(date, dateFormat, locale);
  };

  parse = (str, more) => {
    const { dateFormat, locale } = this.props;
    return parseDate(str, dateFormat, locale);
  };

  render() {
    const {
      inputDataHook,
      value: initialValue,
      customInput,
      dataHook,
      dateFormat,
      ...rest
    } = this.props;
    const MaskedInput = IMaskMixin(({ inputRef, ...props }) => (
      <Input inputRef={inputRef} {...props} />
    ));
    const _inputProps = {
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
    return (
      <div data-hook={dataHook} className={styles.root}>
        {React.cloneElement(
          customInput || (
            <MaskedInput
              placeholderChar={null}
              parse={this.parse}
              format={this.format}
              blocks={formatBlocks}
              pattern={dateFormat}
              mask={Date}
            />
          ),
          _inputProps,
        )}
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
