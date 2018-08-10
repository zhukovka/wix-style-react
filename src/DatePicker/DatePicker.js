import React from 'react';
import PropTypes from 'prop-types';
import Popper from 'popper.js';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import isSameDay from 'date-fns/is_same_day';
import setYear from 'date-fns/set_year';
import setMonth from 'date-fns/set_month';
import setDate from 'date-fns/set_date';

import WixComponent from '../BaseComponents/WixComponent';
import CalendarIcon from '../new-icons/Date';
import {formatDate} from './LocaleUtils';
import Calendar from './Calendar';
import Input from '../Input';
import isDate from 'lodash/isDate';
import classNames from 'classnames';
import styles from './DatePicker.scss';
export const getValue = (datePart, value) => {
  return value && isDate(value) ? value : value[datePart];
};

/**
 * DatePicker component
 *
 * ### Keyboard support
 * * `Left`: Move to the previous day.
 * * `Right`: Move to the next day.
 * * `Up`: Move to the previous week.
 * * `Down`: Move to the next week.
 * * `PgUp`: Move to the previous month.
 * * `PgDn`: Move to the next month.
 * * `Home`: Move to the previous year.
 * * `End`: Move to the next year.
 * * `Enter`/`Esc`/`Tab`: close the calendar. (`Enter` & `Esc` calls `preventDefault`)
 *
 */
export default class DatePicker extends WixComponent {
  static displayName = 'DatePicker';

  static defaultProps = {
    locale: 'en',
    dateFormat: 'MM/DD/YYYY',
    filterDate: () => true,
    rtl: false,
    width: 150,
    rangeEndInputOptions: {
      placeholderText: 'End date'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen || false,
      isDateInputFocusable: !props.isOpen
    };
  }

  componentDidMount() {
    super.componentDidMount();

    this._popper = new Popper(this.inputRef, this.calendarRef, {
      placement: 'top-start'
    });
  }

  componentWillUnmount() {
    this._popper.destroy();
    super.componentWillUnmount();
  }

  openCalendar = () => {
    if (!this.state.isOpen) {
      this.setState(
        {
          isOpen: true,
          isDateInputFocusable: false,
          value: this.props.value || new Date()
        },
        () => this._popper.scheduleUpdate()
      );
    }
  };

  closeCalendar = () => {
    this.setState({isOpen: false});
    /*
      to fix case when user press tab in opened Calendar and:
        1. Calendar become closed
        2. Focus triggered
        3. openCalendar triggered by focus
        4. Calendar become visible
        5. Looks like nothing happen
      We need to do such steps:
       1. Close calendar(with isDateInputFocusable: false)
       2. After calendar is closed, on next event loop(after focus is fired)  make isDateInputFocusable: focusable
       to allow user to press tab in future and open Calendar
    */
    setTimeout(() => this.makeInputFocusable());
  }

  makeInputFocusable = () => this.setState({isDateInputFocusable: true});

  _saveNewValue = ({start, end}, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }

    const prevValue = getValue('start', this.props.value);
    const isChanged = !isSameDay(start, prevValue);

    if (isChanged) {
      const newValue = this.getNewValue(start);
      const newEndValue = this.getNewValue(end);

      this.setState(
        {value: newValue},
        () => this.props.onChange(end ? {start: newValue, end: newEndValue} : newValue)
      );
    }
  };


  getNewValue(value) {
    return value && [
      [value.getFullYear(), setYear],
      [value.getMonth(), setMonth],
      [value.getDate(), setDate]
    ].reduce((value, [datePart, setter]) => setter(value, datePart), this.props.value);
  }

  _handleKeyDown = event => {
    // TODO: dirty for now
    // tab key should move focus so can't preventDefault
    if (event.keyCode !== 9) {
      event.preventDefault();
    }

    if (!this.state.isOpen) {
      this.openCalendar();
    }

    // keyHandler(this.state.value);
  };

  onClickOutside() {
    this.closeCalendar();
  }

  _renderStartInput = () => this._renderInput(true);

  _renderEndInput = () => this._renderInput(false);

  _renderInput = (startInput = true) => {
    const {
      inputDataHook,
      dateFormat,
      locale,
      disabled,
      placeholderText,
      readOnly,
      error,
      errorMessage,
      customInput,
      inputProps,
      rangeEndInputOptions
    } = this.props;
    const initialValue = getValue(startInput ? 'start' : 'end', this.props.value);
    const realCustomInput = startInput ? customInput : rangeEndInputOptions.customInput;
    const realInputProps = startInput ? inputProps : rangeEndInputOptions.inputProps;
    const realInputDataHook = startInput ? inputDataHook : rangeEndInputOptions.inputDataHook;
    const realPlaceholderText = startInput ? placeholderText : rangeEndInputOptions.placeholderText;

    const _inputProps = {
      dataHook: realInputDataHook,
      value: (initialValue && formatDate(initialValue, dateFormat, locale)) || '',
      onInputClicked: this.openCalendar,
      disabled,
      readOnly,
      placeholder: realPlaceholderText,
      prefix: (
        <span className={styles.icon}>
          <CalendarIcon/>
        </span>
      ),
      onFocus: this.openCalendar,
      onKeyDown: this._handleKeyDown,
      tabIndex: this.state.isDateInputFocusable ? 1 : -1,
      error,
      errorMessage,
      autoSelect: false,
      ...(realCustomInput ? realCustomInput.props : {}),
      ...realInputProps
    };

    return React.cloneElement(realCustomInput || <Input/>, _inputProps);
  };

  _setInputRef = ref => this.inputRef = ref;

  _setCalendarRef = ref => this.calendarRef = ref;

  render() {
    const {
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      rtl,
      shouldCloseOnSelect,
      width,
      calendarDataHook,
      twoMonths,
      range,
      locale
    } = this.props;

    const {isOpen, value} = this.state;

    const calendarProps = {
      locale,
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      rtl,
      onChange: this._saveNewValue,
      onClose: this.closeCalendar,
      value,
      shouldCloseOnSelect,
      twoMonths,
      range
    };

    const className = classNames({[styles.root]: true, [styles.range]: range});
    return (
      <div style={{width}} className={className}>
        <div ref={this._setInputRef}>
          <DayPickerInput
            component={this._renderStartInput}
            keepFocus={false}
            />
        </div>

        {range && <div ref={null}>
          <DayPickerInput
            component={this._renderEndInput}
            keepFocus={false}
            />
        </div>}

        <div
          ref={this._setCalendarRef}
          data-hook={calendarDataHook}
          className={styles.calendarRoot}
          >
          {isOpen && <Calendar {...calendarProps}/>}
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  ...Calendar.propTypes,

  /** Can provide Input with your custom props. If you don't need a custom input element, and only want to pass props to the Input, then use inputProps prop. I think this is not in use outside of WSR, and can be deprecated. */
  customInput: PropTypes.node,

  /** Properties appended to the default Input component or the custom Input component. */
  inputProps: PropTypes.object,

  /** Properties appended to the end date Input component or the custom end date Input component. */
  rangeEndInputOptions: PropTypes.shape({
    placeholderText: PropTypes.string,
    customInput: PropTypes.node,
    inputProps: PropTypes.object,
    inputDataHook: PropTypes.string
  }),

  /** Custom date format */
  dateFormat: PropTypes.string,

  /** DatePicker instance locale */
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
      'da'
    ]),
    PropTypes.shape({
      distanceInWords: PropTypes.object,
      format: PropTypes.object
    })
  ]),

  /** Is the DatePicker disabled */
  disabled: PropTypes.bool,

  /** dataHook for the DatePicker's Input */
  inputDataHook: PropTypes.string,

  /** calendarDataHook for the DatePicker's calendar view */
  calendarDataHook: PropTypes.string,

  /** placeholder of the Input */
  placeholderText: PropTypes.string,

  /** RTL mode */
  rtl: PropTypes.bool,

  /** controls the whether the calendar will be visible or not */
  isOpen: PropTypes.bool,

  /** will show exclamation icon when true **/
  error: PropTypes.bool,

  /** will display message when hovering error icon **/
  errorMessage: PropTypes.node,

  /** set desired width of DatePicker input */
  width: PropTypes.number
};
