import * as React from 'react';
import Calendar from '../../src/Calendar';
import {calendarTestkitFactory} from '../../testkit';
import {calendarTestkitFactory as calendarEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = calendarTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = calendarEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CalendarWithMandatoryProps() {
  return <Calendar onChange={(value, modifiers) => undefined} />;
}

function CalendarWithAllProps() {
  return (
    <Calendar
      onChange={(value, modifiers) => undefined}
      autoFocus
      className="cls"
      dataHook="hook"
      excludePastDates
      numOfMonths={1}
      filterDate={d => false}
      locale="en"
      value={new Date()}
      selectionMode="day"
      showYearDropdown
      showMonthDropdown
      shouldCloseOnSelect
    />
  );
}
