import React from 'react';
import PropTypes from 'prop-types';
import DayPicker, {DateUtils} from 'react-day-picker';
import addMonths from 'date-fns/add_months';
import parse from 'date-fns/parse';
import startOfMonth from 'date-fns/start_of_month';

import WixComponent from '../../BaseComponents/WixComponent';
import localeUtilsFactory from '../LocaleUtils';
import DatePickerHead from '../DatePickerHead';
import {getValue} from '../DatePicker';

export default class Calendar extends WixComponent {
  static displayName = 'Calendar';

  static defaultProps = {
    locale: 'en',
    filterDate: () => true,
    shouldCloseOnSelect: true,
    rtl: false
  };

  constructor(props) {
    super(props);

    this.state = {
      month: getValue('start', this.props.value),
      range: this._getInitialRangeState()
    };
  }

  // TODO: Change to getDerivedStateFromProps with React ^16.0.0
  componentWillReceiveProps(nextProps) {
    this.setState({month: getValue('start', nextProps.value)});
  }

  _setMonth = month => this.setState({month});

  _getInitialRangeState = () => {
    const {value} = this.props;
    const start = getValue('start', value) || null;
    const end = getValue('end', value) || null;

    return {
      from: start,
      to: end,
      enteredTo: end
    };
  };

  _getEmptyRangeState = () => ({
    from: null,
    to: null,
    enteredTo: null
  });

  _handleResetClick = () => {
    this.setState({range: this._getEmptyRangeState()});
  };

  _handleDayClick = (value, modifiers = {}) => {
    if (this.props.range) {
      const day = value;
      const {from, to} = this.state.range;
      if (from && to && day >= from && day <= to) {
        this._handleResetClick();
        return;
      }
      if (this._isSelectingFirstDay(from, to, day)) {
        this.setState({
          range: {
            from: day,
            to: null,
            enteredTo: null
          }
        });
      } else {
        this.setState({
          range: {
            ...this.state.range,
            to: day,
            enteredTo: day
          }
        });
        this.props.onChange({start: from, end: day}, modifiers);
        this.props.shouldCloseOnSelect && this.props.onClose();
      }
    } else {
      this.props.onChange({start: value}, modifiers);
      this.props.shouldCloseOnSelect && this.props.onClose();
    }
  };

  _isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  _handleDayMouseEnter = day => {
    const {from, to} = this.state.range;
    if (!this._isSelectingFirstDay(from, to, day)) {
      this.setState({
        range: {
          ...this.state.range,
          enteredTo: day
        }
      });
    }
  };

  _createDayPickerProps = () => {
    const {from, enteredTo} = this.state.range;
    const modifiers = {start: from, end: enteredTo};
    const {
      locale,
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      value,
      rtl,
      range,
      twoMonths
    } = this.props;
    const propsValue = getValue('start', value);
    const month = this.state.month || propsValue;
    const localeUtils = localeUtilsFactory(locale);
    const disabledDays = range ?
      {before: from} :
      excludePastDates ?
        [{before: new Date()}] :
        date => !filterDate(date);
    const selectedDays = range ?
      [from, {from, to: enteredTo}] :
      parse(propsValue);

    const captionElement = (
      <DatePickerHead
        {...{
          date: month,
          showYearDropdown,
          showMonthDropdown,
          localeUtils,
          rtl,
          onChange: this._setMonth,
          onLeftArrowClick: () => this._setMonth(startOfMonth(addMonths(month, -1))),
          onRightArrowClick: () => this._setMonth(startOfMonth(addMonths(month, 1)))
        }}
        />
    );

    return {
      disabledDays,
      initialMonth: month,
      initialYear: month,
      selectedDays,
      month,
      year: month,
      firstDayOfWeek: 1,
      locale: typeof locale === 'string' ? locale : '',
      fixedWeeks: true,
      onKeyDown: this._handleKeyDown,
      onDayClick: this._handleDayClick,
      onDayMouseEnter: this._handleDayMouseEnter,
      modifiers,
      localeUtils,
      navbarElement: () => null,
      captionElement,
      onDayKeyDown: this._handleDayKeyDown,
      numberOfMonths: twoMonths ? 2 : 1,
      className: twoMonths ? 'DayPicker--TwoMonths' : ''
    };
  };

  _handleKeyDown = event => {
    const keyHandler = this.keyHandlers[event.keyCode];

    keyHandler && keyHandler();
  };

  keyHandlers = {
    // escape
    27: this.props.onClose,

    // tab
    9: this.props.onClose
  };

  _focusSelectedDay = dayPickerRef => {
    if (dayPickerRef) {
      this.dayPickerRef = dayPickerRef;
      const selectedDay = this.dayPickerRef.dayPicker.querySelector('.DayPicker-Day--selected');

      if (selectedDay) {
        selectedDay.classList.add('DayPicker-Day--unfocused');
        selectedDay.focus();
      }
    }
  }

  _handleDayKeyDown = () => {
    const unfocusedDay = this.dayPickerRef.dayPicker.querySelector('.DayPicker-Day--unfocused');

    if (unfocusedDay) {
      unfocusedDay.classList.remove('DayPicker-Day--unfocused');
    }
  }

  render() {
    return <DayPicker ref={this._focusSelectedDay} {...this._createDayPickerProps()}/>;
  }
}

Calendar.propTypes = {
  /** Use 2 months layout */
  twoMonths: PropTypes.bool,

  /** Use 2 inputs for range selection */
  range: PropTypes.bool,

  /** Callback function called whenever the user selects a day in the calendar */
  onChange: PropTypes.func.isRequired,

  /** Callback function called whenever user press escape or click outside of the element */
  onClose: PropTypes.func,

  /** Past dates are unselectable */
  excludePastDates: PropTypes.bool,

  /** Only the truthy dates are selectable */
  filterDate: PropTypes.func,

  /** RTL mode */
  rtl: PropTypes.bool,

  /** The selected date or range */
  value: PropTypes.oneOfType([PropTypes.object], PropTypes.shape({
    start: PropTypes.object,
    end: PropTypes.object
  })),

  /** Display a selectable yearDropdown */
  showYearDropdown: PropTypes.bool,

  /** Display a selectable monthDropdown */
  showMonthDropdown: PropTypes.bool,

  /** should the calendar close on day selection */
  shouldCloseOnSelect: PropTypes.bool,

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
  ])
};
