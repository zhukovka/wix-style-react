import React from 'react';
import PropTypes from 'prop-types';

import DayPicker from 'react-day-picker/DayPicker';

import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';
import addMonths from 'date-fns/add_months';
import subMonths from 'date-fns/sub_months';
import addYears from 'date-fns/add_years';
import subYears from 'date-fns/sub_years';
import parse from 'date-fns/parse';
import startOfMonth from 'date-fns/start_of_month';

import WixComponent from '../../BaseComponents/WixComponent';
import localeUtilsFactory from '../LocaleUtils';

import DatePickerHead from '../DatePickerHead';

export default class Calendar extends WixComponent {
  static displayName = 'Calendar';

  static propTypes = {
    /** Should show or hide the component */
    visible: PropTypes.bool,

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

    /** The selected date */
    value: PropTypes.object,

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

  static defaultProps = {
    locale: 'en',
    filterDate: () => true,
    shouldCloseOnSelect: true,
    rtl: false
  };

  constructor(props) {
    super(props);

    this.state = {
      isMonthPickerOpen: false,
      isYearPickerOpen: false,
      value: props.value
    };
  }

  _setValue = value => this.setState({value});

  _createDayPickerProps = () => {
    const {
      locale,
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      value: propsValue,
      rtl,
      onChange
    } = this.props;

    const {value} = this.state;

    const localeUtils = localeUtilsFactory(locale);

    const captionElement = (
      <DatePickerHead
        {...{
          date: value,
          showYearDropdown,
          showMonthDropdown,
          localeUtils,
          rtl,
          onChange: this._setValue,

          onLeftArrowClick: () => this._setValue(startOfMonth(addMonths(value, -1))),

          onRightArrowClick: () => this._setValue(startOfMonth(addMonths(value, 1)))
        }}
        />
    );

    return {
      disabledDays: excludePastDates ? [{before: new Date()}] : date => !filterDate(date),

      initialMonth: value,
      initialYear: value,
      selectedDays: parse(propsValue),
      month: value,
      year: value,
      firstDayOfWeek: 1,
      locale: typeof locale === 'string' ? locale : '',
      fixedWeeks: true,
      modifiers: value ? {'keyboard-selected': value} : {},
      onKeyDown: this._handleKeyDown,
      onDayClick: onChange,
      localeUtils,
      canChangeMonth: false, // this disables `navbarElement`, whereas `navbarElement: null` doesn't
      captionElement
    };
  };

  _handleKeyDown = event => {
    const keyHandler = this.keyHandlers[event.keyCode];

    if (keyHandler) {
      const isTabClicked = event.keyCode === 9;

      // tab key should move focus so can't preventDefault
      if (!isTabClicked) {
        event.preventDefault();
      }

      // TODO M: This looks like the only place we should keep on input
      // if (!this.state.isOpen) {
      //   this.openCalendar();
      // }

      keyHandler(this.state.value);
    }
  };

  keyHandlers = {
    // enter
    13: value => this.props.onChange(value),

    // escape
    27: this.closeCalendar,

    // page up
    33: value => this._setValue(subMonths(value, 1)),

    // page down
    34: value => this._setValue(addMonths(value, 1)),

    // end
    35: value => this._setValue(addYears(value, 1)),

    // home
    36: value => this._setValue(subYears(value, 1)),

    // left arrow
    37: value => this._setValue(subDays(value, this.props.rtl ? -1 : 1)),

    // up arrow
    38: value => this._setValue(subDays(value, 7)),

    // right arrow
    39: value => this._setValue(addDays(value, this.props.rtl ? -1 : 1)),

    // down arrow
    40: value => this._setValue(addDays(value, 7)),

    // tab
    9: this.closeCalendar
  };

  render() {
    const {visible} = this.props;

    return <div>{visible && <DayPicker {...this._createDayPickerProps()}/>}</div>;
  }
}
