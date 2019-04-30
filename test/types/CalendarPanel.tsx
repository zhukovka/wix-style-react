import * as React from 'react';
import CalendarPanel from '../../src/CalendarPanel';
import {calendarPanelTestkitFactory} from '../../testkit';
import {calendarPanelTestkitFactory as calendarPanelEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = calendarPanelTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = calendarPanelEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CalendarPanelWithMandatoryProps() {
  return <CalendarPanel />;
}

function CalendarPanelWithAllProps() {
  return (
    <CalendarPanel
      className="cls"
      dataHook="hook"
      excludePastDates
      filterDate={d => true}
      footer={({selectedDays, submitDisabled}) => (
        <span>{selectedDays.toString() + submitDisabled}</span>
      )}
      onChange={d => undefined}
      onClose={e => undefined}
      shouldCloseOnSelect
      showMonthDropdown
      showYearDropdown
      value={new Date()}
      presets={[
        {
          disabled: true,
          id: 1,
          overrideStyle: true,
          selectedDays: new Date(),
          value: new Date()
        }
      ]}
      selectionMode="day"
      locale="en"
    />
  );
}
