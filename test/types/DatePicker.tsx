import * as React from 'react';
import DatePicker from '../../src/DatePicker';
import {datePickerTestkitFactory} from '../../testkit';
import {datePickerTestkitFactory as datePickerEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = datePickerTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = datePickerEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function DatePickerBadgeWithMandatoryProps() {
  return <DatePicker onChange={(value, mods) => undefined} />;
}

function DatePickerBadgeWithAllProps() {
  return (
    <DatePicker
      calendarDataHook="asd"
      customInput={<input />}
      dataHook="nook"
      error
      errorMessage="asdas"
      excludePastDates
      filterDate={d => true}
      initialOpen
      inputDataHook="asd"
      inputProps={{}}
      isOpen
      zIndex={1}
      width={100}
      rtl
      selectionMode="day"
      onClose={e => undefined}
      numOfMonths={1}
      locale="en"
      autoFocus
      className="jkh"
      dateFormat="YYYY/MM/DD"
      disabled
      onChange={date => undefined}
      placeholderText="Select Date"
      shouldCloseOnSelect
      showMonthDropdown
      showYearDropdown
      value={new Date('2017-04-30T21:00:00.000Z')}
    />
  );
}
