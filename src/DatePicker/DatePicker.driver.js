import $ from 'jquery';
import moment from 'moment';

function datePickerDriverFactory(ele) {
  return {
    getDatepickerPopup() {
      return $('.react-datepicker');
    },

    nextMonth() {
      this.getDatepickerPopup().find('.react-datepicker__navigation--next')[0].click();
    },

    previousMonth() {
      this.getDatepickerPopup().find('.react-datepicker__navigation--previous')[0].click();
    },

    getCurrentMonth() {
      const monthText = this.getDatepickerPopup().find('.react-datepicker__current-month').text();
      return moment(monthText, ['MMMM YYYY']);
    },

    getSelectedDate() {
      return this.getDatepickerInput().val();
    },

    getDatepickerInput() {
      return ele.find('input');
    },

    clickInput() {
      this.getDatepickerInput().click();
    },

    clickDay(day) {
      this.getDatepickerPopup().find(`[aria-label='day-${day}']`).click();
    },

    selectDate(date) {
      this.clickInput();
      const curMonth = this.getCurrentMonth();
      const monthDiff = date.clone().startOf('month').diff(curMonth, 'month');

      for (let i = 0; i < Math.abs(monthDiff); i++) {
        if (monthDiff > 0) {
          this.nextMonth();
        } else {
          this.previousMonth();
        }
      }

      this.clickDay(date.date());
    }
  };
}

export {datePickerDriverFactory};
