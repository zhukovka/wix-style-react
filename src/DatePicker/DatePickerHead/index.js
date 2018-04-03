import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import range from 'lodash/range';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';

import DatePickerDropdown from '../DatePickerDropdown';

import styles from './styles.scss';

const caption = (text, dataHook) =>
  <div
    data-hook={dataHook}
    className={styles.caption}
    children={text}
    />;

const optionsOf = items =>
  items.map((item, index) => ({value: item, id: index}));

const DatePickerHead = ({
  date,
  localeUtils,
  onChange,
  onLeftArrowClick,
  onRightArrowClick,
  showMonthDropdown,
  showYearDropdown
}) => {
  const months = optionsOf(localeUtils.getMonths());
  const selectedMonth = months.find(({id}) => id === date.getMonth());

  const years = optionsOf(range(2028, 1900));
  const selectedYear = years.find(({value}) => value === date.getFullYear());

  return (
    <div
      data-hook="datepicker-head"
      className={styles.root}
      >

      <div
        className={classnames(styles.arrow, styles.arrowLeft)}
        data-hook="datepicker-left-arrow"
        onClick={onLeftArrowClick}
        >
        <ChevronLeft className={styles.arrowIcon}/>
      </div>

      {showMonthDropdown ?
        <DatePickerDropdown
          dataHook="datepicker-month-dropdown"
          caption={selectedMonth.value}
          options={months}
          selectedId={selectedMonth.id}
          onChange={({id}) =>
            onChange(new Date(date.getFullYear(), id))
          }
          /> :

        caption(selectedMonth.value, 'datepicker-month-caption')
      }

      {showYearDropdown ?
        <DatePickerDropdown
          dataHook="datepicker-year-dropdown"
          caption={selectedYear.value}
          options={years}
          selectedId={selectedYear.id}
          onChange={({value}) =>
            onChange(new Date(value, date.getMonth()))
          }
          /> :

        caption(selectedYear.value, 'datepicker-year-caption')
      }

      <div
        className={classnames(styles.arrow, styles.arrowRight)}
        data-hook="datepicker-right-arrow"
        onClick={onRightArrowClick}
        >
        <ChevronRight className={styles.arrowIcon}/>
      </div>
    </div>
  );
};

DatePickerHead.propTypes = {
  date: PropTypes.object.isRequired,
  localeUtils: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLeftArrowClick: PropTypes.func.isRequired,
  onRightArrowClick: PropTypes.func.isRequired,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool
};


export default DatePickerHead;
