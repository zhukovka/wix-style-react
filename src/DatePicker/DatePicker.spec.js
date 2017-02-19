import React from 'react';
import DatePicker from './DatePicker';
import {datePickerDriverFactory} from './DatePicker.driver';
import {mount} from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import $ from 'jquery';

describe('DatePicker', () => {
  let driver, onChange, value;

  beforeAll(() => {
    $('<div class=\'container\'/>').appendTo(document.body);
  });

  beforeEach(() => {
    onChange = sinon.spy();
  });

  describe('calendar', () => {
    beforeEach(() => {
      render();

      driver.clickInput();
    });

    it('calendar is shown', () => {
      expect(driver.getDatepickerPopup().length).toBe(1);
    });

    describe('select a date', () => {
      beforeEach(() => {
        value = moment('2016-04-03');
        render();
        driver.clickInput();
        driver.selectDate(moment('2016-03-15'));
      });

      it('calendar is closed', () => {
        expect(driver.getDatepickerPopup().length).toBe(0);
      });

      it('onChange reports the selected date', () => {
        const onChangeDate = onChange.getCall(0).args[0];
        expect(onChangeDate.toISOString()).toEqual(moment('2016-03-15').toISOString());
      });
    });
  });

  it('calendar is not shown', () => {
    render();
    expect(driver.getDatepickerPopup().length).toBe(0);
  });

  function render() {
    mount(
      <DatePicker
        onChange={onChange}
        value={value}
        />,
      {
        attachTo: $('.container')[0]
      }
    );

    driver = datePickerDriverFactory($('.container'));
  }
});
